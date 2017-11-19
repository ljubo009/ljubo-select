import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LjuboSelectModule} from './modules/ljubo-select/ljubo-select.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LjuboSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
