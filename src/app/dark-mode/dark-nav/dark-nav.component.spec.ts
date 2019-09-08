import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkNavComponent } from './dark-nav.component';

describe('NavComponent', () => {
  let component: DarkNavComponent;
  let fixture: ComponentFixture<DarkNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
