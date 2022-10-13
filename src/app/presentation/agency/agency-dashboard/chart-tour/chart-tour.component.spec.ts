import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTourComponent } from './chart-tour.component';

describe('ChartTourComponent', () => {
  let component: ChartTourComponent;
  let fixture: ComponentFixture<ChartTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
