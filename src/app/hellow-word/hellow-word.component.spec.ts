import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowWordComponent } from './hellow-word.component';

describe('HellowWordComponent', () => {
  let component: HellowWordComponent;
  let fixture: ComponentFixture<HellowWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellowWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellowWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
