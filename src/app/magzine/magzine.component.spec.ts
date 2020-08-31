import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagzineComponent } from './magzine.component';

describe('MagzineComponent', () => {
  let component: MagzineComponent;
  let fixture: ComponentFixture<MagzineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagzineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagzineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
