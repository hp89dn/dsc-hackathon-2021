import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutDscComponent } from './home/about-dsc/about-dsc.component';
import { AboutHackathonComponent } from './home/about-hackathon/about-hackathon.component';
import { AccompanyComponent } from './home/accompany/accompany.component';
import { ActivitiesComponent } from './home/activities/activities.component';
import { PeopleComponent } from './home/people/people.component';
import { StatisticComponent } from './home/statistic/statistic.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutDscComponent,
    AboutHackathonComponent,
    AccompanyComponent,
    ActivitiesComponent,
    PeopleComponent,
    StatisticComponent,
    TimelineComponent,
    LoginComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
