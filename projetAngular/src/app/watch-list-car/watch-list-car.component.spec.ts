import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListCarComponent } from './watch-list-car.component';

describe('WatchListCarComponent', () => {
  let component: WatchListCarComponent;
  let fixture: ComponentFixture<WatchListCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
