import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-panel',
  imports: [TodoList],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel {

}
