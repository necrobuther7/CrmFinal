import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarinteraccionComponent } from './registrarinteraccion.component';

describe('RegistrarinteraccionComponent', () => {
  let component: RegistrarinteraccionComponent;
  let fixture: ComponentFixture<RegistrarinteraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarinteraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarinteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
