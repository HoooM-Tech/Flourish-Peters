import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmtNavComponent } from './mmt-nav.component';

describe('MmtNavComponent', () => {
  let component: MmtNavComponent;
  let fixture: ComponentFixture<MmtNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmtNavComponent]
    });
    fixture = TestBed.createComponent(MmtNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
