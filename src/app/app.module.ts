
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseTopicsComponent } from './course-topics/course-topics.component';
import { UxcourseComponent } from './uxcourse/uxcourse.component';
import { AngularcourseComponent } from './angularcourse/angularcourse.component';
import { JscourseComponent } from './jscourse/jscourse.component';
import { WebcourseComponent } from './webcourse/webcourse.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CoursesComponent,
    CourseTopicsComponent,
    UxcourseComponent,
    AngularcourseComponent,
    JscourseComponent,
    WebcourseComponent,
    CoursedetailsComponent,
    NotfoundComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'uxcourse', component: UxcourseComponent },
      {path: 'webcourse', component: WebcourseComponent },
      {path: 'profile', component: ProfileComponent },
      {path: 'coursetopic', component: CourseTopicsComponent },
      {path: 'coursetopic/:id', component: CoursedetailsComponent },
      {path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
