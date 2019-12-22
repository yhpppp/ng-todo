import { Component } from '@angular/core';
import { TaskService } from './model/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: { title?: string; id?: number } = {};

  constructor(public taskService: TaskService) {
    this.taskService.read();
  }
  title = 'ng-todo';

  setCompleteStatus(index, completed) {
    this.taskService.update(index, { completed });
  }

  createOrUpdateItem() {
    const form = this.form;
    if (!form.title) {
      return;
    }
    if (form.id) {
      this.taskService.update(form.id, form);
    } else {
      this.taskService.create({ title: form.title });
    }
    this.claerForm();
  }

  removeItem(id: number) {
    this.taskService.remove(id);
  }

  updateItem(index) {
    this.form = this.taskService.find(index);
  }

  claerForm() {
    this.form = {};
  }
}
