import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCompetenceComponent } from './show-all-competence.component';

describe('ShowAllCompetenceComponent', () => {
  let component: ShowAllCompetenceComponent;
  let fixture: ComponentFixture<ShowAllCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllCompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAllCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
