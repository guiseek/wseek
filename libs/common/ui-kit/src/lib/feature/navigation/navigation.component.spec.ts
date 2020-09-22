import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekNavigationComponent } from './navigation.component';

describe('SeekNavigationComponent', () => {
  let component: SeekNavigationComponent;
  let fixture: ComponentFixture<SeekNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SeekNavigationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
