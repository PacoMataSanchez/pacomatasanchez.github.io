import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Primeng
import { DockModule } from 'primeng/dock';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
