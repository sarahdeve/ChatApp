import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personal1Component } from './personal1.component';

describe('Personal1Component', () => {
  let component: Personal1Component;
  let fixture: ComponentFixture<Personal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Personal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Personal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
