import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoxComponent } from './edit-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ITask } from 'src/app/core/interface/IMock';

describe('EditBoxComponent', () => {
  let component: EditBoxComponent;
  let fixture: ComponentFixture<EditBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBoxComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditBoxComponent);
    component = fixture.componentInstance;
    component.task =  {
      id: 1,
      name: "Anthea Pundy",
      username: "apundy4",
      title: "Software Engineer III",
      value: 177.19,
      date: "2021-01-01T14:09:51Z",
      image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
      isPayed: false
    };
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve chamar o emmit saveChanges quando dalvar os novos dados', () => {
    const updatedTask: ITask = {
      id: 1,
      name: "Anthea Pundy",
      username: "apundy4",
      title: "Nova task",
      value: 177.19,
      date: "2021-01-01T14:09:51Z",
      image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
      isPayed: false
    };
    const saveChangesSpy = jest.spyOn(component.saveChanges, 'emit');
    component.saveTaskChanges(updatedTask);
    expect(saveChangesSpy).toHaveBeenCalledWith(updatedTask);
  });

  it('Deve chamar o emit cancelEdit quando cancelar a ação de editar', () => {
    const cancelEditSpy = jest.spyOn(component.cancelEdit, 'emit');
    component.cancelEditing();
    expect(cancelEditSpy).toHaveBeenCalled();
  });
});
