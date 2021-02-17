import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHackathonComponent } from './about-hackathon.component';

describe('AboutHackathonComponent', () => {
  let component: AboutHackathonComponent;
  let fixture: ComponentFixture<AboutHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHackathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
