import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './views/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CounterComponent } from './views/counter/counter.component';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './views/table/table.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CounterComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
