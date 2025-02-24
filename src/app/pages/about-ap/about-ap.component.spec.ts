import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApComponent } from './about-ap.component';

describe('AboutApComponent', () => {
  let component: AboutApComponent;
  let fixture: ComponentFixture<AboutApComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutApComponent]
    });
    fixture = TestBed.createComponent(AboutApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
