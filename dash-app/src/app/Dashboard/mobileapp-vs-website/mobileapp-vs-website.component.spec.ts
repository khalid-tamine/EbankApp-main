import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappVsWebsiteComponent } from './mobileapp-vs-website.component';

describe('MobileappVsWebsiteComponent', () => {
  let component: MobileappVsWebsiteComponent;
  let fixture: ComponentFixture<MobileappVsWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileappVsWebsiteComponent]
    });
    fixture = TestBed.createComponent(MobileappVsWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
