import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Friend } from './../models/friend';
import { Observable, first, map, take } from 'rxjs';
import { getCountFromServer } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  maxCount:number = 50;

  constructor(private firestore: AngularFirestore) { }
  
  async addFriend(friend:Friend) : Promise<void>{

    const friendCount = await this.countFriends(friend.UserId).pipe(first()).toPromise();
    if(friendCount < this.maxCount){
      friend.Id = `${friend.UserId}-${friend.FriendPlayerId}`;
      const ref = this.firestore.collection('Friends').doc(`${friend.UserId}-${friend.FriendPlayerId}`);
      const result = ref.set(friend, {merge: true});
      return result;
    } else {
      throw new Error(`You can only have ${this.maxCount} friends.`);
    }
  }

  removeFriend(friendId:string) : Promise<void> {
    const ref = this.firestore.collection('Friends').doc(friendId);
    const result = ref.delete();
    return result;
  }

  getFriend(uid:string, friendPlayerId:string) : Observable<Friend> {
    const friendId = `${uid}-${friendPlayerId}`;
    return this.firestore.doc<Friend>(`Friends/${friendId}`).valueChanges();
  }

  getFriends(userId:string) : Observable<Friend[]> {
    return this.firestore.collection<Friend>('Friends', ref =>
        ref
        .where('UserId', '==', userId)
      ).valueChanges().pipe();
  }
  
  countFriends(userId:string) {
    const collectionRef = this.firestore.collection<Friend>('Friends', ref=> ref.where('UserId', '==', userId));
    return collectionRef.get().pipe(map(snap=>{
      return snap.size;
    }));
  }

}
