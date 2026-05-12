import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationEtEngagementComponent } from './participation-et-engagement.component';

describe('ParticipationEtEngagementComponent', () => {
  let component: ParticipationEtEngagementComponent;
  let fixture: ComponentFixture<ParticipationEtEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipationEtEngagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipationEtEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
