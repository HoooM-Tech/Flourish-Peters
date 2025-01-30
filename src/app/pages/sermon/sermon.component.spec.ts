import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonComponent } from './sermon.component';

describe('SermonComponent', () => {
  let component: SermonComponent;
  let fixture: ComponentFixture<SermonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SermonComponent]
    });
    fixture = TestBed.createComponent(SermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
