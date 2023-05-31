import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlertaService } from './alerta.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppModule,
    FormsModule,


  ],
  providers: [
    AlertaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
