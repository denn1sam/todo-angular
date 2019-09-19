import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { ListItemComponent } from './list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_FEATURE_KEY, todoReducer } from 'src/app/todo/reducers';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListItemComponent,
        InputComponent,
        Input,
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // fit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
