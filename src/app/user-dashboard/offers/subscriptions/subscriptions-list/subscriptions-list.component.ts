import { Component, OnInit, Input } from '@angular/core';
import { IOffer, ISubscription } from '../../models';
import { OffersService } from '../../offers.service';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss'],
})
export class SubscriptionsListComponent implements OnInit {
  @Input() offer: IOffer;
  @Input() colSize = 3;
  subscriptions: ISubscription[];
  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getSubscriptions(this.offer.id)
      .subscribe(
        (data: { subscriptions: ISubscription[] }) =>
          (this.subscriptions = data.subscriptions)
      );
  }
}
