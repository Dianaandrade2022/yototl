import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliadosComponent } from './aliados.component';

describe('AliadosComponent', () => {
  let component: AliadosComponent;
  let fixture: ComponentFixture<AliadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AliadosComponent]
    });
    fixture = TestBed.createComponent(AliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
