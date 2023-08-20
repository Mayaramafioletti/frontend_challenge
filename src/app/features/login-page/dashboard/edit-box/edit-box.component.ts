import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/core/interface/IMock';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  @Input() task: ITask;
  @Output() saveChanges = new EventEmitter<ITask>();
  @Output() cancelEdit = new EventEmitter<void>();

  saveTaskChanges(updatedTask: ITask): void {
    this.saveChanges.emit(updatedTask);
  }

  cancelEditing(): void {
    this.cancelEdit.emit();
  }

}
