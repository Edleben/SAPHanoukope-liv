import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasAndResourcesComponent } from './medias-and-resources.component';

describe('MediasAndResourcesComponent', () => {
  let component: MediasAndResourcesComponent;
  let fixture: ComponentFixture<MediasAndResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediasAndResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediasAndResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
