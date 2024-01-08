import { DomSanitizer } from "@angular/platform-browser";
import { Player } from "../models/player";

export class GlobalConstants {
    constructor() {
            
    }

    public static STATS_KEY:string = 'stats-counter';
    public static LOCAL_STORAGE_EXPIRY:number = 7;

    public static USER_PROFILE:string = 'user-profile';

    public static PLAYER_DETAIL:string = 'player-detail';

    public static PLAYER_OPPONENT_DETAIL:string = 'player-opponent-detail';

    public static SEARCH_PLAYERS_BY_STATE:string = 'player-list-state';
    
    public static CLUB_DETAIL:string = 'club-detail';

    public static LOCAL_STORAGE_SHORT_EXPIRY:number = 1;

    public static TEAM_DETAIL:string = 'team-detail';

}