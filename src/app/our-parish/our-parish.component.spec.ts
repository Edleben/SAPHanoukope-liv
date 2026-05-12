import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurParishComponent } from './our-parish.component';

describe('OurParishComponent', () => {
  let component: OurParishComponent;
  let fixture: ComponentFixture<OurParishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurParishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurParishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
