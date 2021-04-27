import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcourseComponent } from './angularcourse.component';

describe('AngularcourseComponent', () => {
  let component: AngularcourseComponent;
  let fixture: ComponentFixture<AngularcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
