import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask, ITasks } from '../interface/IMock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.apiUrl}/tasks`);
  }

  searchTasks(criteria: string, value: string): Observable<ITask[]> {
    const queryParams = encodeURIComponent(criteria) + '=' + encodeURIComponent(value);
    return this.http.get<ITask[]>(`${this.apiUrl}/tasks/search?${queryParams}`);
  }

  postTask(newTask: ITask): Observable<ITask> {
    return this.http.post<ITask>(`${this.apiUrl}/tasks`, newTask);
  }

  putTask(taskId: number, updatedTask: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.apiUrl}/tasks/${taskId}`, updatedTask);
  }

  patchTask(taskId: number, updates: Partial<ITask>): Observable<ITask> {
    return this.http.patch<ITask>(`${this.apiUrl}/tasks/${taskId}`, updates);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
