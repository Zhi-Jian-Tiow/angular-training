import { Component, computed, inject, input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  private todoService = inject(TodoService)
  itemId = input.required<string>();
  taskTitle = input.required<string>();
  priority = input.required<string>();
  tags = input.required<string[]>();
  dueDate = input.required<string | null>();
  tagStrings = computed(() => this.tags().join(', '));

  onEdit() {
    //this.todoService.update()
  }

  onDelete() {
    this.todoService.delete(this.itemId())
  }
}
