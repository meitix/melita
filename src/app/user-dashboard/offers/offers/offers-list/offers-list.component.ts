import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OffersService } from '../../offers.service';
import { IOffer } from '../../models';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  offers: IOffer[] = [];
  errors: string[] = [];
  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService.getOffers().subscribe(
      (data: { offers: IOffer[] }) => (this.offers = data.offers),
      (error) => {
        console.error(error);
        this.errors.push('We are not able to fetch data from server, please check you internet connection');
      }
    );
  }
}
