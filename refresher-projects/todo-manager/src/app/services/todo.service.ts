import { Injectable } from '@angular/core';
import { Todo, NewTodoTask, UpdateTodo } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';
import seedData from '../../../data/seed.json';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  load(): Todo[] {
    const todoList = window.localStorage.getItem('todos');
    if (!todoList) {
      const initialToDoList = JSON.stringify(seedData);
      window.localStorage.setItem('todos', initialToDoList);
      return seedData as Todo[];
    }
    return JSON.parse(todoList) as Todo[];
  }

  save(currentToDoList: Todo[], task?: Todo): void {
    let newToDoList;
    if (task) {
      newToDoList = [...currentToDoList, task];
    } else {
      newToDoList = [...currentToDoList];
    }
    window.localStorage.setItem('todos', JSON.stringify(newToDoList));
  }

  getAll(): Todo[] {
    return this.load();
  }

  create(taskInput: NewTodoTask): Todo {
    const currentToDoList = this.load();
    const newToDo = {
      id: uuidv4(),
      title: taskInput.title,
      description: taskInput.description || '',
      status: 'active',
      priority: taskInput.priority,
      tags: taskInput.tags,
      dueDate: taskInput.dueDate,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      completedAt: null,
      order: currentToDoList.length + 1,
    } as Todo;

    this.save(currentToDoList, newToDo);

    return newToDo;
  }

  update(id: string, updateData: UpdateTodo): Todo | undefined {
    const currentToDoList = this.load();
    const target = currentToDoList.find((todo) => todo.id === id);
    if (!target) return undefined;
    const updatedTodo = {
      ...target,
      title: updateData.title ? updateData.title : target.title,
      description: updateData.description
        ? updateData.description
        : target.description,
      status: updateData.status ? updateData.status : target.status,
      priority: updateData.priority ? updateData.priority : target.priority,
      tags: updateData.tags ? updateData.tags : target.tags,
      dueDate: updateData.dueDate ? updateData.dueDate : target.dueDate,
      order: updateData.order ? updateData.order : target.order,
      completedAt:
        updateData.status === 'completed'
          ? new Date().toISOString()
          : target.completedAt,
      updatedAt: new Date().toISOString(),
    } as Todo;

    currentToDoList.splice(currentToDoList.indexOf(target), 1);

    this.save(currentToDoList, updatedTodo);
    return updatedTodo;
  }

  delete(id: string) {
    const currentToDoList = this.load();
    const target = currentToDoList.find((todo) => todo.id === id);
    if (!target) return;
    currentToDoList.splice(currentToDoList.indexOf(target), 1);
    this.save(currentToDoList);
  }

  bulkDelete(ids: string[]): void {
    ids.map((id) => {
      this.delete(id);
    });
  }

  reorder(orderArray: { id: string; order: number }[]): void {
    orderArray.map((todo) => {
      this.update(todo.id, { order: todo.order });
    });
  }
}
