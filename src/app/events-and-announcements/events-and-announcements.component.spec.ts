import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAndAnnouncementsComponent } from './events-and-announcements.component';

describe('EventsAndAnnouncementsComponent', () => {
  let component: EventsAndAnnouncementsComponent;
  let fixture: ComponentFixture<EventsAndAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsAndAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsAndAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
