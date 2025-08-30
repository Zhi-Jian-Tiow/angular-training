import { Component, computed, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NewTodoTask } from '../../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  private todoService = inject(TodoService);

  title = signal<string>('');

  onAddTask() {
    const newTodo = {
      title: this.title(),
      dueDate: null,
      tags: [],
      priority: 'low',
    } as NewTodoTask;
    this.todoService.create(newTodo);
  }
}
