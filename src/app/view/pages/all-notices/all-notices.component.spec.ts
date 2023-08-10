import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNoticesComponent } from './all-notices.component';

describe('AllNoticesComponent', () => {
  let component: AllNoticesComponent;
  let fixture: ComponentFixture<AllNoticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllNoticesComponent]
    });
    fixture = TestBed.createComponent(AllNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
