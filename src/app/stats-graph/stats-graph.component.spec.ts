import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGraphComponent } from './stats-graph.component';

describe('StatsGraphComponent', () => {
  let component: StatsGraphComponent;
  let fixture: ComponentFixture<StatsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
