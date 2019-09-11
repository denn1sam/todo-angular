import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './todo/list/list.module#ListModule',
  },
];
