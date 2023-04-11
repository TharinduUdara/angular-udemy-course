import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAleartComponent } from './success-aleart.component';

describe('SuccessAleartComponent', () => {
  let component: SuccessAleartComponent;
  let fixture: ComponentFixture<SuccessAleartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAleartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessAleartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
