import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesPersonajePage } from './detalles-personaje.page';

describe('DetallesPersonajePage', () => {
  let component: DetallesPersonajePage;
  let fixture: ComponentFixture<DetallesPersonajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPersonajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
