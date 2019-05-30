import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearinteraccionComponent } from './crearinteraccion.component';

describe('CrearinteraccionComponent', () => {
  let component: CrearinteraccionComponent;
  let fixture: ComponentFixture<CrearinteraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearinteraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearinteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
