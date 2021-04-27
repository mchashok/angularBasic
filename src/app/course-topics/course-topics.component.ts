import { Component, OnInit } from '@angular/core';
import { courseTopics } from "../config"

@Component({
  selector: 'app-course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.scss']
})
export class CourseTopicsComponent implements OnInit {

  courseTopics;

  constructor() { 
    this.courseTopics = courseTopics
  }

  ngOnInit() {
  }

}
