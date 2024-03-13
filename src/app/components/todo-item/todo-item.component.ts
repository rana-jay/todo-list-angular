import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit
{
  @Input() todo : Todo = { sno : 0,title : "",desc:"",active:true};

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
  }

  
}
