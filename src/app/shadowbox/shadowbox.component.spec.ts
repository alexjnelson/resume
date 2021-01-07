import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowboxComponent } from './shadowbox.component';

describe('ShadowboxComponent', () => {
  let component: ShadowboxComponent;
  let fixture: ComponentFixture<ShadowboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
