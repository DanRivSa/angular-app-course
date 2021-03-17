import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GiphyService} from '../../services/giphy.service';
import {GiphyComponent} from '../../components/giphy/giphy.component';
import {AppRoutingModule} from '../../app-routing.module';

const components = [GiphyComponent];


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [GiphyService],
  exports:[components]
})
export class GiphyModule { }
