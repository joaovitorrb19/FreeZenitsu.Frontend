import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecategoriamodalComponent } from './removecategoriamodal.component';

describe('RemovecategoriamodalComponent', () => {
  let component: RemovecategoriamodalComponent;
  let fixture: ComponentFixture<RemovecategoriamodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovecategoriamodalComponent]
    });
    fixture = TestBed.createComponent(RemovecategoriamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
