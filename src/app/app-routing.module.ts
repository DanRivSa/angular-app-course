import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoxImageComponent} from './components/fox-image/fox-image.component';
import {GiphyComponent} from './components/giphy/giphy.component';

const routes: Routes = 
[
  {path:"",component:FoxImageComponent},
  {path:"random-gif",component:GiphyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
