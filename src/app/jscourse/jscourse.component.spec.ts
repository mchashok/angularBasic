import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JscourseComponent } from './jscourse.component';

describe('JscourseComponent', () => {
  let component: JscourseComponent;
  let fixture: ComponentFixture<JscourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JscourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
