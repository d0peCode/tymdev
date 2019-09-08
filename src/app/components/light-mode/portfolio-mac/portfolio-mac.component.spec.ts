import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMacComponent } from './portfolio-mac.component';

describe('PortfolioMacComponent', () => {
  let component: PortfolioMacComponent;
  let fixture: ComponentFixture<PortfolioMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
