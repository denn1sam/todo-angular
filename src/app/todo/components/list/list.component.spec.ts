import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { listRoutes } from './list-routing.module';
import { TODO_FEATURE_KEY, todoReducer } from '../../reducers';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const ctx: any = {
    todos: [
      {
        id: +new Date().getTime(),
        text: 'eat',
        done: false,
      },
      {
        id: +new Date().getTime() + 1,
        text: 'seat',
        done: false,
      },
      {
        id: +new Date().getTime() + 2,
        text: 'qwe',
        done: true,
      },
    ],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        InputComponent,
        ListItemComponent,
      ],
      imports: [
        BrowserAnimationsModule,
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
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set Todo Items General Info', () => {
    component.setTodoItemsGeneralInfo(ctx.todos);

    expect(component.todosLength).toEqual(3);
    expect(component.doneCount).toEqual(1);
  });

  it('should run ngOnInit', () => {
    component.ngOnInit();

    expect(component.todos.length).toEqual(0);
  });

  it('should run facade.addTodo', () => {
    component.inputValue = 'test';
    spyOn(component.todoFacade, 'addTodo');

    component.addTodo();

    expect(component.todoFacade.addTodo).toHaveBeenCalled();
  });
});
