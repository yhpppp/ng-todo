import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() data: Task;
  @Output() todoItemCompleteChange = new EventEmitter();
  @Output() removeTodoItem = new EventEmitter();
  @Output() updateTodoItem = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
