import {ClubPrice } from './club-price';
import { ClubCoach } from './club-coach';
import { Player } from './player';
import { ClubEvent } from './club-event';
import { ClubSocial } from './club-social';

export interface ClubSetup {
    Id:string;

    AboutUs:string;
    AboutUsImageUrl:string;

    OpeningHours:string[];

    Prices:ClubPrice[];

    Awards:string[];

    Coaches:ClubCoach[];

    Events:ClubEvent[];

    Players:Player[];

    social:ClubSocial;
}
