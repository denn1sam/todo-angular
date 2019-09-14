import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { listRoutes } from './list-routing.module';
import { ListComponent } from './list.component';
import { InputComponent } from './input/input.component';
import { ListItemComponent } from './list-item/list-item.component';

import { TODO_FEATURE_KEY, todoReducer } from '../../reducers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer),
  ],
  declarations: [
    ListComponent,
    InputComponent,
    ListItemComponent,
  ],
})
export class ListModule { }