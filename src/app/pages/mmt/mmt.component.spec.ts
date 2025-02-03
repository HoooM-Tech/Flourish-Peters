import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmtComponent } from './mmt.component';

describe('MmtComponent', () => {
  let component: MmtComponent;
  let fixture: ComponentFixture<MmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmtComponent]
    });
    fixture = TestBed.createComponent(MmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
