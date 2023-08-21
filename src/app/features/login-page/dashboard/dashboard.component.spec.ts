import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskService } from '../../../core/services/task.service';
import { of } from 'rxjs';
import { format, parseISO } from 'date-fns';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let taskService: TaskService;
  const mockConfirm = jest.fn().mockImplementation(message => true);
  window.confirm = mockConfirm;
  const mockTasks = [
    {
      id: 1,
      name: "Anthea Pundy",
      username: "apundy4",
      title: "Software Engineer III",
      value: 177.19,
      date: "2021-01-01T14:09:51Z",
      image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
      isPayed: false
    },
    {
      id: 2,
      name: "Anthea Pundy",
      username: "apundy4",
      title: "Software Engineer I",
      value: 17.19,
      date: "2021-01-01T14:09:51Z",
      image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
      isPayed: false
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [DashboardComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    taskService = TestBed.inject(TaskService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    window.confirm = jest.fn(() => true);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve chamar o metodo de getTasks no ngOnInit', () => {
    const getTasksSpy = jest.spyOn(taskService, 'getTasks');
    component.ngOnInit();
    expect(getTasksSpy).toHaveBeenCalled();
  });

  it('Deve atualizar as tasks e a pagina quando chamar o getTasks()', () => {
    jest.spyOn(taskService, 'getTasks').mockReturnValue(of(mockTasks));
    const updatePaginationSpy = jest.spyOn(component, 'updatePagination');
    component.getTasks();
    expect(updatePaginationSpy).toHaveBeenCalled();
  });


  it('Deve formatar a data', () => {
    const date = '2023-08-21T12:00:00.000Z';
    const formattedDate = format(parseISO(date), 'dd/MM/yyyy');
    const result = component.formatDate(date);
    expect(result).toEqual(formattedDate);
  });

  it('Deve atualizar a paginação usando o updatePagination', () => {
    component.pageSize = 10;
    component.pageIndex = 1;
    component.tasks = mockTasks;
    component.updatePagination();
    expect(component.totalPages).toEqual(1);
    expect(component.pageNumbers).toEqual([0]);
  });
  it('Deve atualizar o pageIndex e paginatedTasks quando goToPage é chamado', () => {
    component.tasks = mockTasks;
    component.pageSize = 1;
    component.goToPage(1);
    expect(component.pageIndex).toEqual(1);
    expect(component.paginatedTasks).toEqual([mockTasks[1]]);
  });

  it('Deve verificar se overlayAddTask para true quando addTask é chamado', () => {
    component.addTask();
    expect(component.overlayAddTask).toEqual(true);
  });
  it('Deve atualizar tasks e colocar overlayAddTask como false quando closeAddBox é chamado', () => {
    const getTasksSpy = jest.spyOn(taskService, 'getTasks');
    component.closeAddBox();
    expect(getTasksSpy).toHaveBeenCalled();
    expect(component.overlayAddTask).toEqual(false);
  });
  it('Deve chamar taskService.deleteTask e getTasks quando deleteTask é chamado', () => {
    const taskId = 1;
    jest.spyOn(taskService, 'deleteTask').mockReturnValue(of());
    const getTasksSpy = jest.spyOn(component, 'getTasks');
    component.deleteTask(taskId);
    expect(taskService.deleteTask).toHaveBeenCalledWith(taskId);
    expect(window.confirm).toHaveBeenCalledWith(
      'Tem certeza que deseja excluir esta tarefa?'
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(getTasksSpy).toHaveBeenCalled();
    });
  });
  it('Deve editar a task quando editTask é chamado', () => {
    const taskToEdit = mockTasks[0];
    component.editTask(taskToEdit);
    expect(component.editingTask).toEqual(taskToEdit);
  });
  it('editingTask deve ser null quando cancelEditing é chamado', () => {
    component.cancelEditing();
    expect(component.editingTask).toEqual(null);
  });

  it('Deve filtrar por nome quando searchByName é chamado', () => {
    const searchTerm = 'Software Engineer I';
    component.tasks = mockTasks;
    component.searchByName(searchTerm);
    const expectedFilteredTasks = mockTasks.filter(task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    expect(component.paginatedTasks).toEqual(expectedFilteredTasks);
  });
  it('Deve filtrar paginatedTasks pelo nome e titulo quando search e chamado ', () => {
    const searchTerm = 'Software Engineer I';
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    component.tasks = mockTasks;
    component.busca = searchTerm;
    component.search();
    const expectedFilteredTasks = mockTasks.filter(task =>
      task.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      task.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    expect(component.paginatedTasks).toEqual(expectedFilteredTasks);
  });

  it('Deve chamar updatePagination quando search é chamado quando a pesquisa for vazia', () => {
    component.tasks = mockTasks;
    component.busca = '';
    const updatePaginationSpy = jest.spyOn(component, 'updatePagination');
    component.search();
    expect(updatePaginationSpy).toHaveBeenCalled();
  })
  it('overlayAddTask deve ser false quando cancelAdding é chamado', () => {
    component.cancelAdding();
    expect(component.overlayAddTask).toEqual(false);
  });
});
