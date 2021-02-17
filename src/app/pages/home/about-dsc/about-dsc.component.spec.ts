import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDscComponent } from './about-dsc.component';

describe('AboutDscComponent', () => {
  let component: AboutDscComponent;
  let fixture: ComponentFixture<AboutDscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
