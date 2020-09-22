import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekSidebarComponent } from './sidebar.component';

describe('SeekSidebarComponent', () => {
  let component: SeekSidebarComponent;
  let fixture: ComponentFixture<SeekSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
