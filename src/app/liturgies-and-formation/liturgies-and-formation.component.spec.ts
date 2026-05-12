import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiturgiesAndFormationComponent } from './liturgies-and-formation.component';

describe('LiturgiesAndFormationComponent', () => {
  let component: LiturgiesAndFormationComponent;
  let fixture: ComponentFixture<LiturgiesAndFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiturgiesAndFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiturgiesAndFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
