import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlagasPage } from './plagas.page';

describe('PlagasPage', () => {
  let component: PlagasPage;
  let fixture: ComponentFixture<PlagasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
