import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-offer-found',
  templateUrl: './no-offer-found.component.html',
  styleUrls: ['./no-offer-found.component.scss']
})
export class NoOfferFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  order() {
    alert('Should navigate to the offers page.');
  }
}
