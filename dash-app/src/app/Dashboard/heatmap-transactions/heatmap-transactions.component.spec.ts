import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapTransactionsComponent } from './heatmap-transactions.component';

describe('HeatmapTransactionsComponent', () => {
  let component: HeatmapTransactionsComponent;
  let fixture: ComponentFixture<HeatmapTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatmapTransactionsComponent]
    });
    fixture = TestBed.createComponent(HeatmapTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
