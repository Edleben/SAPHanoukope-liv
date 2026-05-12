import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndAnnouncementsComponent } from './news-and-announcements.component';

describe('NewsAndAnnouncementsComponent', () => {
  let component: NewsAndAnnouncementsComponent;
  let fixture: ComponentFixture<NewsAndAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsAndAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAndAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
