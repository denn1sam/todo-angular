import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './todo/components/list/list.module#ListModule',
  },
];
