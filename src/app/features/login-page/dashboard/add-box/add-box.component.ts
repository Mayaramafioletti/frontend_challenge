import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/core/interface/IMock';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-add-box',
  templateUrl: './add-box.component.html',
  styleUrls: ['./add-box.component.css']
})
export class AddBoxComponent {
  @Input() showOverlay: boolean;
  @Output() overlayAnswer = new EventEmitter<boolean>();
  @Output() cancelAdd = new EventEmitter<void>();

  newTask: ITask = {
    id: 0,
    name: '',
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

  addNewTask() {
    this.taskService.postTask(this.newTask).subscribe(
      (createdTask: ITask) => {
        this.resetNewTask();
      },
      error => {
      }
    );
    this.overlayAnswer.emit(false);
  }

  cancelAdding(): void {
    this.cancelAdd.emit();
    this.resetNewTask();
  }
  resetNewTask() {
    this.newTask = {
      id: 0,
      name: '',
      username: '',
      title: '',
      value: 0,
      date: '',
      image: '',
      isPayed: false
    };
  }

}
