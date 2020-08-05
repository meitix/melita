import { Component, OnInit, Input } from '@angular/core';
import { ISubscription } from '../../models';

@Component({
  selector: 'app-subscriptions-item',
  templateUrl: './subscriptions-item.component.html',
  styleUrls: ['./subscriptions-item.component.scss']
})
export class SubscriptionsItemComponent implements OnInit {
  @Input() subscription: ISubscription;

  constructor() { }

  ngOnInit(): void {
  }

  getUsageChartSize() {
   return Math.floor(12 / this.subscription.usage.length);
  }

}
