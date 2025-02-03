import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmtFooterComponent } from './mmt-footer.component';

describe('MmtFooterComponent', () => {
  let component: MmtFooterComponent;
  let fixture: ComponentFixture<MmtFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmtFooterComponent]
    });
    fixture = TestBed.createComponent(MmtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
