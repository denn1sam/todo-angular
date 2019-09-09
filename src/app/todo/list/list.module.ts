import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { listRoutes } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }