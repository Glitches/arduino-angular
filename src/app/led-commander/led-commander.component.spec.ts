import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedCommanderComponent } from './led-commander.component';

describe('LedCommanderComponent', () => {
  let component: LedCommanderComponent;
  let fixture: ComponentFixture<LedCommanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedCommanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedCommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
