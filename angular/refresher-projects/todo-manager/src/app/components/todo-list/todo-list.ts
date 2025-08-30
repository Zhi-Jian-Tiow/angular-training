import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  private todoService = inject(TodoService);
  todoList = signal<Todo[]>([]);

  ngOnInit(): void {
    const data = this.todoService.load()
    this.todoList.set(data)
  }
}
