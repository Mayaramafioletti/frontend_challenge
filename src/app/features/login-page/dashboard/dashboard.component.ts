import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { ITask, ITaskEdit } from 'src/app/core/interface/IMock';
import { TaskService } from '../../../core/services/task.service';

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
  busca: string;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTasks();
    this.route.queryParams.subscribe(params => {
      const searchName = params['name'];
      if (searchName) {
        this.searchByName(searchName);
      }
    });
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
    this.formattedDate = format(dateObject, 'dd/MM/yyyy')
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
      }
    );
  }

  searchByName(name: string) {
    this.paginatedTasks = this.tasks.filter(task =>
      task.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  search() {
    if (this.busca) {
      const searchTerm = this.busca.toLowerCase();
      this.paginatedTasks = this.tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm) ||
        task.title.toLowerCase().includes(searchTerm)
      );
    } else {
      this.updatePagination();
    }
  }
  cancelAdding(): void {
    this.overlayAddTask = false;
  }
  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.tasks = this.tasks
      .slice()
      .sort((a, b) => this.compare(a, b, column));
    this.updatePagination();
  }

  compare(a: ITask, b: ITask, column: string): number {
    let aValue = column === 'value' ? a.value : a[column as keyof ITask];
    let bValue = column === 'value' ? b.value : b[column as keyof ITask];
    if (column == 'value') {
      aValue = +aValue.toString().replace(',', '.');
      bValue = +bValue.toString().replace(',', '.');
    }
    if (aValue < bValue) {
      return this.sortDirection === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return this.sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  }

}
