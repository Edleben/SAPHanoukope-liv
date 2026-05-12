import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurParishComponent } from './our-parish/our-parish.component';
import { LiturgiesAndFormationComponent } from './liturgies-and-formation/liturgies-and-formation.component';
import { ParticipationEtEngagementComponent } from './participation-et-engagement/participation-et-engagement.component';
import { EventsAndAnnouncementsComponent } from './events-and-announcements/events-and-announcements.component';
import { MediasAndResourcesComponent } from './medias-and-resources/medias-and-resources.component';
import { HomeComponent } from './our-parish/home/home.component';
import { AboutUsComponent } from './our-parish/about-us/about-us.component';
import { ClergyAndParishCouncilComponent } from './our-parish/clergy-and-parish-council/clergy-and-parish-council.component';
import { MinistriesAndAssociationsComponent } from './our-parish/ministries-and-associations/ministries-and-associations.component';
import { MassScheduleComponent } from './liturgies-and-formation/mass-schedule/mass-schedule.component';
import { SacramentsComponent } from './liturgies-and-formation/sacraments/sacraments.component';
import { EducationalProgramsComponent } from './liturgies-and-formation/educational-programs/educational-programs.component';
import { PrayerRequestsComponent } from './liturgies-and-formation/prayer-requests/prayer-requests.component';
import { OnlineGivingComponent } from './participation-et-engagement/online-giving/online-giving.component';
import { VolunteerOpportunitiesComponent } from './participation-et-engagement/volunteer-opportunities/volunteer-opportunities.component';
import { ParishRegistrationComponent } from './participation-et-engagement/parish-registration/parish-registration.component';
import { ParishEventsComponent } from './events-and-announcements/parish-events/parish-events.component';
import { NewsAndAnnouncementsComponent } from './events-and-announcements/news-and-announcements/news-and-announcements.component';
import { BulletinComponent } from './events-and-announcements/bulletin/bulletin.component';
import { FaqComponent } from './events-and-announcements/faq/faq.component';
import { PhotoGalleryComponent } from './medias-and-resources/photo-gallery/photo-gallery.component';
import { LivestreamComponent } from './medias-and-resources/livestream/livestream.component';
import { ResourceLibraryComponent } from './medias-and-resources/resource-library/resource-library.component';
import { ContactInformationComponent } from './medias-and-resources/contact-information/contact-information.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './shared/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    OurParishComponent,
    LiturgiesAndFormationComponent,
    ParticipationEtEngagementComponent,
    EventsAndAnnouncementsComponent,
    MediasAndResourcesComponent,
    HomeComponent,
    AboutUsComponent,
    ClergyAndParishCouncilComponent,
    MinistriesAndAssociationsComponent,
    MassScheduleComponent,
    SacramentsComponent,
    EducationalProgramsComponent,
    PrayerRequestsComponent,
    OnlineGivingComponent,
    VolunteerOpportunitiesComponent,
    ParishRegistrationComponent,
    ParishEventsComponent,
    NewsAndAnnouncementsComponent,
    BulletinComponent,
    FaqComponent,
    PhotoGalleryComponent,
    LivestreamComponent,
    ResourceLibraryComponent,
    ContactInformationComponent,
    NavbarComponent,
    FooterComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
