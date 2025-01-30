import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveComponent } from './give.component';

describe('GiveComponent', () => {
  let component: GiveComponent;
  let fixture: ComponentFixture<GiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiveComponent]
    });
    fixture = TestBed.createComponent(GiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
