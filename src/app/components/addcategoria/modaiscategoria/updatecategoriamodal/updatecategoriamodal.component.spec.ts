import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategoriamodalComponent } from './updatecategoriamodal.component';

describe('UpdatecategoriamodalComponent', () => {
  let component: UpdatecategoriamodalComponent;
  let fixture: ComponentFixture<UpdatecategoriamodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecategoriamodalComponent]
    });
    fixture = TestBed.createComponent(UpdatecategoriamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
