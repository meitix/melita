export interface ISubscription {
  id: number;
  name: string;
  type: SubscriptionType;
  usage?: IUsage[];
}

export enum SubscriptionType {
  INTERNET = 'INTERNET',
  TELEPHONY = 'TELEPHONY',
  MOBILE = 'MOBILE',
  TELEVISION = 'TELEVISION'
}

export interface IUsage {
  type: UsageType;
  used: number;
  limit: number;
}

export enum UsageType {
  SMS = 'SMS',
  DATA = 'DATA'
}
