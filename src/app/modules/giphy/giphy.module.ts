import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GiphyService} from '../../services/giphy.service';
import {GiphyComponent} from '../../components/giphy/giphy.component';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';

const components = [GiphyComponent];


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [GiphyService],
  exports:[components]
})
export class GiphyModule { }
