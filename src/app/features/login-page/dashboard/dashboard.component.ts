import { Component } from '@angular/core';
import { ITask, ITasks } from 'src/app/core/interface/IMock';
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
  newTask: ITask = {
    id: 0,
    name: '52',
    username: '',
    title: '',
    value: 0,
    date: '',
    image: '',
    isPayed: false
  };

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
        console.error('Error getting tasks:', error);
      }
    );
  }
  formatDate(date: string): string {
    const parts = date.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
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
  // addTask() {
  //   this.taskService.postTask(this.newTask).subscribe(
  //     (createdTask: ITask) => {
  //       console.log('New task created:', createdTask);
  //       // Limpe os campos do formulário ou faça qualquer outra ação necessária
  //       this.newTask = {
  //         id: 0,
  //         name: '',
  //         username: '',
  //         title: '',
  //         value: 0,
  //         date: '',
  //         image: '',
  //         isPayed: false
  //       };
  //     },
  //     error => {
  //       console.error('Error creating task:', error);
  //     }
  //   );
  // }

}
