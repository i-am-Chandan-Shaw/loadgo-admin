import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriverDocumentsComponent } from './view-driver-documents.component';

describe('ViewDriverDocumentsComponent', () => {
  let component: ViewDriverDocumentsComponent;
  let fixture: ComponentFixture<ViewDriverDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDriverDocumentsComponent]
    });
    fixture = TestBed.createComponent(ViewDriverDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
