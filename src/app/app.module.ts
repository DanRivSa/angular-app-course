import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FoxModule} from './modules/fox/fox.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GiphyModule } from './modules/giphy/giphy.module';
import { Secrets } from 'src/secrets';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoxModule,
    HttpClientModule,
    GiphyModule
  ],
  providers: [Secrets],
  bootstrap: [AppComponent]
})
export class AppModule { }
