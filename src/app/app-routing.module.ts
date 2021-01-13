import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';

const routes: Routes = [
{path:'addTodo' , component:AddTodoComponent},
{path:'showTodo', component:ShowTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
