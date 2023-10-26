import {Match} from './match';

export interface PlayerMatchEvent {
    EventId:string;
    EventName:string;
    MatchDate:Date;
   
    Matches:Match[];    
}
