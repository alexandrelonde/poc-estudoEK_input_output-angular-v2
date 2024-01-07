import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputPaiComponent } from './components/output-pai/output-pai.component';
import { InputFilhoComponent } from './components/input-filho/input-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputPaiComponent,
    InputFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
