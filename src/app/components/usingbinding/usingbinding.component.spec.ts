import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingbindingComponent } from './usingbinding.component';

describe('UsingbindingComponent', () => {
  let component: UsingbindingComponent;
  let fixture: ComponentFixture<UsingbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsingbindingComponent]
    });
    fixture = TestBed.createComponent(UsingbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
