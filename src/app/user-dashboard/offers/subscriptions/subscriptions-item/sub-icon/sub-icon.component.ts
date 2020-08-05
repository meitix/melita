import { Component, OnInit, Input } from '@angular/core';
import { SubscriptionType } from '../../../models';

@Component({
  selector: 'app-sub-icon',
  templateUrl: './sub-icon.component.html',
  styleUrls: ['./sub-icon.component.scss'],
})
export class SubIconComponent implements OnInit {
  @Input() type: SubscriptionType;
  icons = {
    [SubscriptionType.MOBILE]: 'mobile-alt',
    [SubscriptionType.TELEPHONY]: 'phone',
    [SubscriptionType.INTERNET]: 'wifi',
    [SubscriptionType.TELEVISION]: 'tv',
  };
  constructor() {}

  ngOnInit(): void {}
}
