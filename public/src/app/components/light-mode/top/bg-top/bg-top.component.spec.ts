import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTopComponent } from './bg-top.component';

describe('BgTopComponent', () => {
  let component: BgTopComponent;
  let fixture: ComponentFixture<BgTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
