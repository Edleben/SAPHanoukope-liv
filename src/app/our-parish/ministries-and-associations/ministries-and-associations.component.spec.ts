import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistriesAndAssociationsComponent } from './ministries-and-associations.component';

describe('MinistriesAndAssociationsComponent', () => {
  let component: MinistriesAndAssociationsComponent;
  let fixture: ComponentFixture<MinistriesAndAssociationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinistriesAndAssociationsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MinistriesAndAssociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
