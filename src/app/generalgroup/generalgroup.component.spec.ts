import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralgroupComponent } from './generalgroup.component';

describe('GeneralgroupComponent', () => {
  let component: GeneralgroupComponent;
  let fixture: ComponentFixture<GeneralgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
