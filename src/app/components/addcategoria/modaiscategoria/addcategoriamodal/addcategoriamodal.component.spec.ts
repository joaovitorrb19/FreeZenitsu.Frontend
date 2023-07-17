import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoriamodalComponent } from './addcategoriamodal.component';

describe('AddcategoriamodalComponent', () => {
  let component: AddcategoriamodalComponent;
  let fixture: ComponentFixture<AddcategoriamodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcategoriamodalComponent]
    });
    fixture = TestBed.createComponent(AddcategoriamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
