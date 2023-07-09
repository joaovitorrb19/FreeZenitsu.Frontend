import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodutomodalComponent } from './addprodutomodal.component';

describe('AddprodutomodalComponent', () => {
  let component: AddprodutomodalComponent;
  let fixture: ComponentFixture<AddprodutomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprodutomodalComponent]
    });
    fixture = TestBed.createComponent(AddprodutomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
