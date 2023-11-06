import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setString(key:string, val:string) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  getString(key:string) : string{
    var val = localStorage.getItem(key);
    return val;
  }

  setItemWithExpiration(key, value, expirationDays) {
    const expirationTimestamp = new Date().getTime() + expirationDays * 24 * 60 * 60 * 1000;
    const item = {
      value,
      expiration: expirationTimestamp,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItemWithExpiration(key){
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) {
      return null; // Key doesn't exist
    }
  
    const now = new Date().getTime();
    console.log(`comparing ${now} to ${item.expiration}`);
    if (now > item.expiration) {
      localStorage.removeItem(key); // Remove expired item
      console.log('removing localstorage');
      return null; // Item is expired
    }
  
    return item.value;
  }
}
