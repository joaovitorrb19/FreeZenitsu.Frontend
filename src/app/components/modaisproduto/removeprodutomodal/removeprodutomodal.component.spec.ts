import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveprodutomodalComponent } from './removeprodutomodal.component';

describe('RemoveprodutomodalComponent', () => {
  let component: RemoveprodutomodalComponent;
  let fixture: ComponentFixture<RemoveprodutomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveprodutomodalComponent]
    });
    fixture = TestBed.createComponent(RemoveprodutomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
