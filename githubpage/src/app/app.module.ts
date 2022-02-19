import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Primeng
import { DockModule } from 'primeng/dock';
import { SpeedDialModule } from 'primeng/speeddial';

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
    DockModule,
    SpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
