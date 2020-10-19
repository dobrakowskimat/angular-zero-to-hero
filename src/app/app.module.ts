import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTestComponent } from './components/input-test/input-test.component';
import { FirstCodingComponent } from './components/first-coding/first-coding.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTestComponent,
    FirstCodingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
