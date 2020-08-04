import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsItemComponent } from './subscriptions-item.component';

describe('SubscriptionsItemComponent', () => {
  let component: SubscriptionsItemComponent;
  let fixture: ComponentFixture<SubscriptionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
