import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { AddTodo } from './components/add-todo/add-todo';
import { Panel } from "./components/panel/panel";
import { ImportExport } from "./components/import-export/import-export";

@Component({
  selector: 'app-root',
  imports: [Header, AddTodo, Panel, ImportExport],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
