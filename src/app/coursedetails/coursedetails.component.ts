import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courseTopics, courseInfo } from '../config'

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit {
  courseInfo
  courseTopics
  activatedRoute: any;
  constructor(
    private route: ActivatedRoute
  ) {
    this.courseInfo = courseInfo;
    this.courseTopics = courseTopics;
  }

  ngOnInit() {
    this.route.url
      .subscribe(url => console.log('The URL changed to: ' + url));
  }

}
