import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInputComponent } from './fade-input.component';

describe('FadeInputComponent', () => {
  let component: FadeInputComponent;
  let fixture: ComponentFixture<FadeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
