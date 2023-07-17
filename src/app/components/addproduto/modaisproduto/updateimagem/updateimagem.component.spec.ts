import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateimagemComponent } from './updateimagem.component';

describe('UpdateimagemComponent', () => {
  let component: UpdateimagemComponent;
  let fixture: ComponentFixture<UpdateimagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateimagemComponent]
    });
    fixture = TestBed.createComponent(UpdateimagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
