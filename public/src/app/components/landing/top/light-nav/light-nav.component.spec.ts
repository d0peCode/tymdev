import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightNavComponent } from './light-nav.component';

describe('LightNavComponent', () => {
  let component: LightNavComponent;
  let fixture: ComponentFixture<LightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
