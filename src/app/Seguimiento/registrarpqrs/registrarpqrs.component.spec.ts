import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarpqrsComponent } from './registrarpqrs.component';

describe('RegistrarpqrsComponent', () => {
  let component: RegistrarpqrsComponent;
  let fixture: ComponentFixture<RegistrarpqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarpqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarpqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
