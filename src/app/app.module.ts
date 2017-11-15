import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalcService } from './calc.service';

import {AppComponent } from './app.component';
import { CalcPipe } from './calc.pipe';


@NgModule({
  declarations: [
    AppComponent,
      CalcPipe
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      FormsModule,
      HttpModule
  ],
  providers: [CalcService, CalcPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
