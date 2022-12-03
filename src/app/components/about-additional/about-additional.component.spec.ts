import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAdditionalComponent } from './about-additional.component';

describe('AboutAdditionalComponent', () => {
  let component: AboutAdditionalComponent;
  let fixture: ComponentFixture<AboutAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAdditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
