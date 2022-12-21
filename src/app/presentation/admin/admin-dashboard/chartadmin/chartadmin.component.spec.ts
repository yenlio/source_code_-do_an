import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartadminComponent } from './chartadmin.component';

describe('ChartadminComponent', () => {
  let component: ChartadminComponent;
  let fixture: ComponentFixture<ChartadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
