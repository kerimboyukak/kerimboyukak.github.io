import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWeekComponent } from './project-week.component';

describe('ProjectWeekComponent', () => {
  let component: ProjectWeekComponent;
  let fixture: ComponentFixture<ProjectWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
