import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllEmployeeComponent } from './show-all-employee.component';

describe('ShowAllEmployeeComponent', () => {
  let component: ShowAllEmployeeComponent;
  let fixture: ComponentFixture<ShowAllEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAllEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
