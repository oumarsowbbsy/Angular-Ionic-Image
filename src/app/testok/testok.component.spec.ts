import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestokComponent } from './testok.component';

describe('TestokComponent', () => {
  let component: TestokComponent;
  let fixture: ComponentFixture<TestokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
