import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { TODO_FEATURE_KEY, todoReducer } from 'src/app/todo/reducers';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const ctx: any = {
    event: {
      target: {
        value: 'value',
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit input value change', () => {
    spyOn(component.inputValue, 'emit');

    component.inputValueChanged(ctx.event);

    expect(component.inputValue.emit).toHaveBeenCalled();
  });

  it('should clear input value', () => {
    component.value = 'test';
    spyOn(component.inputValue, 'emit');

    component.clearInput();

    expect(component.value).toEqual('');
    expect(component.inputValue.emit).toHaveBeenCalled();
  });
});
