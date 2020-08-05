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
  isLoading = true;
  error: string;
  constructor(private offersService: OffersService) {}

  async ngOnInit() {
    try {
      const data = (await this.offersService
        .getSubscriptions(this.offer.id)
        .toPromise()) as { subscriptions: ISubscription[] };
      this.subscriptions = data.subscriptions;
    } catch (e) {
      console.log(e);
      this.error = 'Oops, Something went wrong';
    } finally {
      this.isLoading = false;
    }
  }
}
