import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../todo.service';
import {take,tap} from 'rxjs/operators';
import{from} from 'rxjs';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ShowTodoComponent implements OnInit {

  //@ViewChild('para1',{static:true}) para1:any
  constructor(private todoService:TodoService) { }

  todoItems:any;
  ngOnInit(): void {
    // console.log(this.para1)
    
     this.todoItems=this.todoService.displayTodo();
    

  }
}

























//ngOnChange
//ngOninit
//ngDoCheck
//ngAfterContentInit()
//ngAfterContentChecked()
//ngAfterViewInit
//ngAfterViewChecked()
//ngOnDetroy()
// const sub=this.todoService.getPosts().
// subscribe(response=>{
//   response.pipe(take(10)).subscribe(val=>console.log(val));
// });