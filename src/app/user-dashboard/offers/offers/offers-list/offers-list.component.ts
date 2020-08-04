import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OffersService } from '../../offers.service';
import { IOffer } from '../../models';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {

  offers: IOffer[];

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOffers().subscribe((offers: IOffer[]) => this.offers = offers);
  }

}
