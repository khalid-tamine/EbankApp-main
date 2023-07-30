import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByCityComponent } from './customers-by-city.component';

describe('CustomersByCityComponent', () => {
  let component: CustomersByCityComponent;
  let fixture: ComponentFixture<CustomersByCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersByCityComponent]
    });
    fixture = TestBed.createComponent(CustomersByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
