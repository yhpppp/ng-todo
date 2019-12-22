import { Component } from '@angular/core';
import { TaskService } from './model/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public taskService: TaskService) {
    this.taskService.read();
  }

  title = 'ng-todo';
}
