import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationFrameComponent } from './education-frame.component';

describe('EducationFrameComponent', () => {
  let component: EducationFrameComponent;
  let fixture: ComponentFixture<EducationFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
