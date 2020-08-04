import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferItemComponent , OffersListComponent} from './offers';
import { SubscriptionsListComponent , SubscriptionsItemComponent} from './subscriptions';



@NgModule({
  declarations: [OffersListComponent, OfferItemComponent, SubscriptionsListComponent, SubscriptionsItemComponent],
  imports: [
    CommonModule
  ]
})
export class OffersModule { }
