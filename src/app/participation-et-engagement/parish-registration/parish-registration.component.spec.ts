import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishRegistrationComponent } from './parish-registration.component';

describe('ParishRegistrationComponent', () => {
  let component: ParishRegistrationComponent;
  let fixture: ComponentFixture<ParishRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParishRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParishRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
