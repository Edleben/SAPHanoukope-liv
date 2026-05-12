import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// Main and child component imports
import { OurParishComponent } from './our-parish/our-parish.component';
import { HomeComponent } from './our-parish/home/home.component';
import { AboutUsComponent } from './our-parish/about-us/about-us.component';
import { ClergyAndParishCouncilComponent } from './our-parish/clergy-and-parish-council/clergy-and-parish-council.component';
import { MinistriesAndAssociationsComponent } from './our-parish/ministries-and-associations/ministries-and-associations.component';
import { LiturgiesAndFormationComponent } from './liturgies-and-formation/liturgies-and-formation.component';
import { MassScheduleComponent } from './liturgies-and-formation/mass-schedule/mass-schedule.component';
import { SacramentsComponent } from './liturgies-and-formation/sacraments/sacraments.component';
import { EducationalProgramsComponent } from './liturgies-and-formation/educational-programs/educational-programs.component';
import { PrayerRequestsComponent } from './liturgies-and-formation/prayer-requests/prayer-requests.component';
import { ParticipationEtEngagementComponent } from './participation-et-engagement/participation-et-engagement.component';
import { OnlineGivingComponent } from './participation-et-engagement/online-giving/online-giving.component';
import { VolunteerOpportunitiesComponent } from './participation-et-engagement/volunteer-opportunities/volunteer-opportunities.component';
import { ParishRegistrationComponent } from './participation-et-engagement/parish-registration/parish-registration.component';
import { EventsAndAnnouncementsComponent } from './events-and-announcements/events-and-announcements.component';
import { ParishEventsComponent } from './events-and-announcements/parish-events/parish-events.component';
import { NewsAndAnnouncementsComponent } from './events-and-announcements/news-and-announcements/news-and-announcements.component';
import { BulletinComponent } from './events-and-announcements/bulletin/bulletin.component';
import { FaqComponent } from './events-and-announcements/faq/faq.component';
import { MediasAndResourcesComponent } from './medias-and-resources/medias-and-resources.component';
import { PhotoGalleryComponent } from './medias-and-resources/photo-gallery/photo-gallery.component';
import { LivestreamComponent } from './medias-and-resources/livestream/livestream.component';
import { ResourceLibraryComponent } from './medias-and-resources/resource-library/resource-library.component';
import { ContactInformationComponent } from './medias-and-resources/contact-information/contact-information.component';

const routes: Routes = [
  {
    path: '',
    component: OurParishComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'clergy-and-parish-council', component: ClergyAndParishCouncilComponent },
      { path: 'ministries-and-associations', component: MinistriesAndAssociationsComponent },
    ]
  },
  {
    path: 'liturgies-and-formation',
    component: LiturgiesAndFormationComponent,
    children: [
      { path: 'mass-schedule', component: MassScheduleComponent },
      { path: 'sacraments', component: SacramentsComponent },
      { path: 'educational-programs', component: EducationalProgramsComponent },
      { path: 'prayer-requests', component: PrayerRequestsComponent },
    ]
  },
  {
    path: 'participation-et-engagement',
    component: ParticipationEtEngagementComponent,
    children: [
      { path: 'online-giving', component: OnlineGivingComponent },
      { path: 'volunteer-opportunities', component: VolunteerOpportunitiesComponent },
      { path: 'parish-registration', component: ParishRegistrationComponent },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'events-and-announcements',
    component: EventsAndAnnouncementsComponent,
    children: [
      { path: 'parish-events', component: ParishEventsComponent },
      { path: 'news-and-announcements', component: NewsAndAnnouncementsComponent },
      { path: 'bulletin', component: BulletinComponent },
      { path: 'faq', component: FaqComponent },
    ]
  },
  {
    path: 'medias-and-resources',
    component: MediasAndResourcesComponent,
    children: [
      { path: 'photo-gallery', component: PhotoGalleryComponent },
      { path: 'livestream', component: LivestreamComponent },
      { path: 'resource-library', component: ResourceLibraryComponent },
      { path: 'contact-information', component: ContactInformationComponent },
    ]
  },
  // Fallback route
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
