import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Friend } from './../models/friend';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private firestore: AngularFirestore) { }
  
  addFriend(friend:Friend) : Promise<void>{
    friend.Id = `${friend.UserId}-${friend.FriendPlayerId}`;

    const ref = this.firestore.collection('Friends').doc(`${friend.UserId}-${friend.FriendPlayerId}`);
    const result = ref.set(friend, {merge: true});
    return result;
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
      ).valueChanges().pipe(take(1));
  }

}
