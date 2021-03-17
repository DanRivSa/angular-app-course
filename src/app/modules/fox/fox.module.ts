import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoxService} from '../../services/fox.service';
import {FoxImageComponent} from '../../components/fox-image/fox-image.component';
import { AppRoutingModule } from '../../app-routing.module';


const components = [FoxImageComponent];


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers:[FoxService]
  ,
  exports:[components]
})
export class FoxModule { }
