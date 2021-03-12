import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoxImageComponent} from './components/fox-image/fox-image.component';

const routes: Routes = 
[
  {path:"",component:FoxImageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
