import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprodutomodalComponent } from './updateprodutomodal.component';

describe('UpdateprodutomodalComponent', () => {
  let component: UpdateprodutomodalComponent;
  let fixture: ComponentFixture<UpdateprodutomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateprodutomodalComponent]
    });
    fixture = TestBed.createComponent(UpdateprodutomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
