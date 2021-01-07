import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgImageWrapperComponent } from './bg-image-wrapper.component';

describe('BgImageWrapperComponent', () => {
  let component: BgImageWrapperComponent;
  let fixture: ComponentFixture<BgImageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgImageWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgImageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
