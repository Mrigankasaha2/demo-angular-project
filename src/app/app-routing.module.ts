import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './views/counter/counter.component';
import { FormsComponent } from './views/forms/forms.component';
import { TableComponent } from './views/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
