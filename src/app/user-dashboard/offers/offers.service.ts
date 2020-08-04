import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http.get(environment.api.getOffersURL());
  }

  getSubscriptions(offerId: number | string) {
    return this.http.get(environment.api.getSubscriptionsURL(offerId));
  }
}
