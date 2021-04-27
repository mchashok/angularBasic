import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxcourseComponent } from './uxcourse.component';

describe('UxcourseComponent', () => {
  let component: UxcourseComponent;
  let fixture: ComponentFixture<UxcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
