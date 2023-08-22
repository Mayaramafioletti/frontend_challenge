import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { ITask } from '../interface/IMock';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;
  let apiUrl = 'http://localhost:3030'

  const newTask =
  {
    id: 2,
    name: "Anthea Pundy",
    username: "apundy4",
    title: "Software Engineer I",
    value: 17.19,
    date: "2021-01-01T14:09:51Z",
    image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
    isPayed: false
  };
  const mockTasks: ITask[] = [{
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
  },];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]

    });
    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('Deve recuperar tarefas', () => {
    service.getTasks().subscribe(tasks => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/tasks`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockTasks);
  });

  it('Deve adicionar nova tarefa', () => {

    service.postTask(newTask).subscribe(task => {
      expect(task).toEqual(newTask);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/tasks`);
    expect(req.request.method).toEqual('POST');

    req.flush(newTask);
  });

  it('Deve atualizar a task', () => {
    const updatedTask = {
      id: 2,
      name: "Anthea Pundy",
      username: "apundy4",
      title: "Software",
      value: 17.19,
      date: "2021-01-01T14:09:51Z",
      image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
      isPayed: false
    };

    service.putTask(updatedTask.id, updatedTask).subscribe(task => {
      expect(task).toEqual(updatedTask);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/tasks/${updatedTask.id}`);
    expect(req.request.method).toEqual('PUT');

    req.flush(updatedTask);
  });

  it('Deve atualizar parcialmente', () => {
    const taskId = 1;
    const updates: Partial<ITask> = { title: 'Novo titulo' };
    const updatedTask: ITask = {
      id: 2,
      name: "Anthea Pundy",
      username: "apundy4",
      title: "Novo titulo",
      value: 17.19,
      date: "2021-01-01T14:09:51Z",
      image: "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
      isPayed: false
    };

    service.patchTask(taskId, updates).subscribe(task => {
      expect(task).toEqual(updatedTask);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/tasks/${taskId}`);
    expect(req.request.method).toEqual('PATCH');

    req.flush(updatedTask);
  });

  it('Deve deletar uma task existente', () => {
    const taskId = 1;

    service.deleteTask(taskId).subscribe(() => {
    });

    const req = httpTestingController.expectOne(`${apiUrl}/tasks/${taskId}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush(null);
  });
});
