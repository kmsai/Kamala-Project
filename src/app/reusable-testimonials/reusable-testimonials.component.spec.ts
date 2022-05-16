import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTestimonialsComponent } from './reusable-testimonials.component';

describe('ReusableTestimonialsComponent', () => {
  let component: ReusableTestimonialsComponent;
  let fixture: ComponentFixture<ReusableTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
