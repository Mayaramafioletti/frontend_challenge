import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { ITask } from 'src/app/core/interface/IMock';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tasks: ITask[] = [];
  paginatedTasks: ITask[] = [];
  pageSize = 10;
  pageIndex = 0;
  totalPages = 0;
  pageNumbers: number[] = [];
  overlayAddTask: boolean = false;
  editingTask: ITask | null = null;
  formattedDate: string = '';

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (tasks: ITask[]) => {
        this.tasks = tasks;
        this.updatePagination();
      },
      error => {
      }
    );
  }
  formatDate(date: string): string {
    const dateObject: Date = parseISO(date);
    this.formattedDate = format(dateObject, 'dd/MM/yyyy ')
    return this.formattedDate;
  }


  updatePagination() {
    this.totalPages = Math.ceil(this.tasks.length / this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i);
    this.paginatedTasks = this.tasks.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  goToPage(page: number) {
    this.pageIndex = page;
    this.updatePagination();
  }

  addTask(): void {
    this.overlayAddTask = true;
  }
  closeAddBox(): void {
    this.getTasks();
    this.overlayAddTask = false;
  }
  deleteTask(taskId: number): void {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          this.getTasks();
        },
        error => {
          console.error('Erro ao excluir tarefa:', error);
        }
      );
    }
  }
  editTask(task: ITask): void {
    this.editingTask = { ...task };
  }

  saveEditedTask(updatedTask: ITask): void {
    this.taskService.putTask(updatedTask.id, updatedTask).subscribe(
      () => {
        this.getTasks();
        this.editingTask = null;
      },
      error => {
        console.error('Erro ao editar tarefa:', error);
      }
    );
  }

  cancelEditing(): void {
    this.editingTask = null;
  }
  togglePayment(task: ITask): void {

    this.taskService.patchTask(task.id, { isPayed: task.isPayed }).subscribe(
      () => {
        task.isPayed = !task.isPayed;
        this.getTasks();
      },
      error => {
        console.error('Erro ao atualizar status de pagamento:', error);
        task.isPayed = !task.isPayed;
      }
    );
  }

}
