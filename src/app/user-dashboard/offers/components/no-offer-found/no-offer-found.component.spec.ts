import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfferFoundComponent } from './no-offer-found.component';

describe('NoOfferFoundComponent', () => {
  let component: NoOfferFoundComponent;
  let fixture: ComponentFixture<NoOfferFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfferFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfferFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
