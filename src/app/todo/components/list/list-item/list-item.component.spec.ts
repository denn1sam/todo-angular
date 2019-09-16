import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { ListItemComponent } from './list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_FEATURE_KEY, todoReducer } from 'src/app/todo/reducers';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
