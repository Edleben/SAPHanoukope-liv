import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClergyAndParishCouncilComponent } from './clergy-and-parish-council.component';

describe('ClergyAndParishCouncilComponent', () => {
  let component: ClergyAndParishCouncilComponent;
  let fixture: ComponentFixture<ClergyAndParishCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClergyAndParishCouncilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClergyAndParishCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
