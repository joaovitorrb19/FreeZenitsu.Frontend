import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodutoComponent } from './addproduto.component';

describe('AddprodutoComponent', () => {
  let component: AddprodutoComponent;
  let fixture: ComponentFixture<AddprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprodutoComponent]
    });
    fixture = TestBed.createComponent(AddprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
