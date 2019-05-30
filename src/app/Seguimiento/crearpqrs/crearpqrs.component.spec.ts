import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpqrsComponent } from './crearpqrs.component';

describe('CrearpqrsComponent', () => {
  let component: CrearpqrsComponent;
  let fixture: ComponentFixture<CrearpqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
