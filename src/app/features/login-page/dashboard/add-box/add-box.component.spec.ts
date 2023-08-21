import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoxComponent } from './add-box.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from '../../../../core/services/task.service';
import { of } from 'rxjs';
import { ITask } from 'src/app/core/interface/IMock';

describe('AddBoxComponent', () => {
  let component: AddBoxComponent;
  let fixture: ComponentFixture<AddBoxComponent>;
  let taskService: Partial<TaskService> = {};

  beforeEach(() => {
    taskService = {
      postTask: jest.fn()
    };
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AddBoxComponent],
      providers: [
        { provide: TaskService, useValue: taskService }
      ]
    });
    fixture = TestBed.createComponent(AddBoxComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Deve emitir overlayAnswer=false', () => {
    const overlayAnswerSpy = jest.spyOn(component.overlayAnswer, 'emit');
    taskService.postTask = jest.fn().mockReturnValue(of({} as ITask));

    component.addNewTask();

    expect(overlayAnswerSpy).toHaveBeenCalledWith(false);
  });
  it('Dece resetar newTask no sucesso', () => {
    taskService.postTask = jest.fn().mockReturnValue(of({} as ITask));
    const resetNewTaskSpy = jest.spyOn(component, 'resetNewTask');
    component.addNewTask();
    expect(resetNewTaskSpy).toHaveBeenCalled();
  });

  it('Dve emitir cancelAdd e resetar newTask', () => {
    const cancelAddSpy = jest.spyOn(component.cancelAdd, 'emit');
    const resetNewTaskSpy = jest.spyOn(component, 'resetNewTask');

    component.cancelAdding();

    expect(cancelAddSpy).toHaveBeenCalled();
    expect(resetNewTaskSpy).toHaveBeenCalled();
  });
  it('Deve resetar newTask ', () => {
    component.newTask = {
      id: 1,
      name: 'Test',
      username: 'test',
      title: 'Test Task',
      value: 10,
      date: '2023-08-21',
      image: 'test.jpg',
      isPayed: true
    };
    component.resetNewTask();

    expect(component.newTask).toEqual({
      id: 0,
      name: '',
      username: '',
      title: '',
      value: 0,
      date: '',
      image: '',
      isPayed: false
    });
  });

});
