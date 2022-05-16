import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselComponentComponent } from './coursel-component.component';

describe('CourselComponentComponent', () => {
  let component: CourselComponentComponent;
  let fixture: ComponentFixture<CourselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourselComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
