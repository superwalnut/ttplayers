import { DomSanitizer } from "@angular/platform-browser";
import { Player } from "../models/player";

export class GlobalConstants {
    constructor() {
            
    }

    public static STATS_KEY:string = 'stats-counter';
    public static LOCAL_STORAGE_EXPIRY:number = 7;

    
}