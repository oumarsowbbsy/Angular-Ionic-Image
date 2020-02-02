import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestokComponent} from './testok/testok.component';


const routes: Routes = [
  {
    path: 'testok',
    component: TestokComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
