import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms'
import { SwPush } from '@angular/service-worker';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoForm;
  private readonly publicKey='BKv_D04AF4MHDYIObhlDaMJgTOZxdk7IXgTYvdXUHoO5z9s_uQEQQwwuhrSxx83NVBxtZcNzlElaM7gqIqQxr-0';
  temp: string;
  constructor(private fb:FormBuilder,private todoService:TodoService,private swPush:SwPush,private http:HttpClient) { }

  ngOnInit(): void {

    this.todoForm=this.fb.group({
      todoItem:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)]]
    });

  }
  
  addTodo()
  {
    console.log(this.todoForm.value);
    this.todoService.saveTodo(this.todoForm.value.todoItem);
    this.pushSubscription();
  }

  async pushSubscription(){
    if(!this.swPush.isEnabled){
      console.log('Notification is not enabled');
      return;
    }
    //this.swPush.unsubscribe();
    await this.swPush.requestSubscription({
      serverPublicKey:this.publicKey
    }).then(sub=>{
      console.log(JSON.stringify(sub))
      this.temp=JSON.stringify(sub);
     // this.temp=`"endPoints":${this.temp}}`;
      console.log(this.temp);
    }).catch(err=>console.log(err));
      this.http.post('http://localhost:3000/api/notification/subscribe',JSON.parse(this.temp)).subscribe((res)=>{
      console.log(res);
    });
  }

}
