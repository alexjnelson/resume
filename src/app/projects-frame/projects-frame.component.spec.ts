import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFrameComponent } from './projects-frame.component';

describe('ProjectsFrameComponent', () => {
  let component: ProjectsFrameComponent;
  let fixture: ComponentFixture<ProjectsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
