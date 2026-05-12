import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacramentsComponent } from './sacraments.component';

describe('SacramentsComponent', () => {
  let component: SacramentsComponent;
  let fixture: ComponentFixture<SacramentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SacramentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SacramentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
