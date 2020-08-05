import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  OfferItemComponent,
  OffersListComponent,
  LoadingComponent,
  NoOfferFoundComponent,
} from './components';
import {
  SubscriptionsListComponent,
  SubscriptionsItemComponent,
} from './subscriptions';
import { OffersRoutingModule } from './offers-routing.module';
import { SubIconComponent } from './subscriptions/subscriptions-item/sub-icon/sub-icon.component';
import { UsageChartComponent } from './subscriptions/subscriptions-item/usage-chart/usage-chart.component';

@NgModule({
  declarations: [
    OffersListComponent,
    OfferItemComponent,
    SubscriptionsListComponent,
    SubscriptionsItemComponent,
    SubIconComponent,
    UsageChartComponent,
    LoadingComponent,
    NoOfferFoundComponent,
  ],
  imports: [CommonModule, OffersRoutingModule, HttpClientModule],
})
export class OffersModule {}
