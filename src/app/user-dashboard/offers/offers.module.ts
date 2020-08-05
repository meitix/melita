import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OfferItemComponent , OffersListComponent} from './offers';
import { SubscriptionsListComponent , SubscriptionsItemComponent} from './subscriptions';
import { OffersRoutingModule } from './offers-routing.module';
import { SubIconComponent } from './subscriptions/subscriptions-item/sub-icon/sub-icon.component';
import { UsageChartComponent } from './subscriptions/subscriptions-item/usage-chart/usage-chart.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [OffersListComponent, OfferItemComponent, SubscriptionsListComponent, SubscriptionsItemComponent, SubIconComponent, UsageChartComponent, LoadingComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    HttpClientModule
  ]
})
export class OffersModule { }
