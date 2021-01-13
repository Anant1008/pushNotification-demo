import { Injectable, ɵSWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { take,map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  todoObject:any[]=[];

  saveTodo(value){
    this.todoObject.push(value);
  }

  displayTodo(){
    return this.todoObject;
  }

  getPosts()
  {
     return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res=>{
     const temp:any=res;
     console.log(res);
     return from(temp);
   }));
  }
}
