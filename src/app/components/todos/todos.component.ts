import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 0,
        title: "demo",
        desc: "Description 1",
        active: true

      }
    ]
  }

  ngOnInit(): void {

  }

  deleteTodo(todo:Todo){
    // console.log(todo);
    const  index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log(todo,"deleted successfully ..");
  }

  addTodo(todo:Todo){
    this.todos.push({...todo});
  }
}
