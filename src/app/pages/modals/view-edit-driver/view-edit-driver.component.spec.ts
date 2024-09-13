import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditDriverComponent } from './view-edit-driver.component';

describe('ViewEditDriverComponent', () => {
  let component: ViewEditDriverComponent;
  let fixture: ComponentFixture<ViewEditDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEditDriverComponent]
    });
    fixture = TestBed.createComponent(ViewEditDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
