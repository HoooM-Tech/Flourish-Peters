import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTextAnimateComponent } from './hero-text-animate.component';

describe('HeroTextAnimateComponent', () => {
  let component: HeroTextAnimateComponent;
  let fixture: ComponentFixture<HeroTextAnimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTextAnimateComponent]
    });
    fixture = TestBed.createComponent(HeroTextAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
