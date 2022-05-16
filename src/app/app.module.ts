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
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsComponent } from './views/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CounterComponent,
    TableComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
