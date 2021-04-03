import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FoxModule} from './modules/fox/fox.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GiphyModule } from './modules/giphy/giphy.module';
import { Secrets } from 'src/secrets';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {INTERCEPTORS} from './interceptors/Interceptors';
//libraries
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoxModule,
    HttpClientModule,
    GiphyModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Secrets,INTERCEPTORS],
  bootstrap: [AppComponent]
})
export class AppModule { }
