import { Component, OnInit, Input } from '@angular/core';
import { IOffer } from '../../models';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

  @Input() offer: IOffer;
  constructor() { }

  ngOnInit(): void {
  }

}
