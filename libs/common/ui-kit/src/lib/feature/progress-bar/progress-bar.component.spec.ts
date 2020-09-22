import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekProgressBarComponent } from './progress-bar.component';

describe('SeekProgressBarComponent', () => {
  let component: SeekProgressBarComponent;
  let fixture: ComponentFixture<SeekProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SeekProgressBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
