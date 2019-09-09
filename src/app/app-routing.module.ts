import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './list/list.module#ListModule',
  },
];
