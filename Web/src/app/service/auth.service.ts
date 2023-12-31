
import { Injectable,NgZone } from '@angular/core';
import { FacebookAuthProvider, GoogleAuthProvider } from "@angular/fire/auth";
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private auth: AngularFireAuth){
        this.auth.onAuthStateChanged((user) => {
          if (user) {
            const localUser = {
              Id : user.uid,
              Email : user.email,
              EmailVerified: user.emailVerified,

            } as User;
            localStorage.setItem('user', JSON.stringify(localUser));
          } else {
            localStorage.removeItem('user');
          }
        });
    }

    getLoggedInUser() : User{
      var json = localStorage.getItem('user');
      if(json){
        var user = JSON.parse(json)
        return user;
      }
      
      return null;
    }

    sendEmailVerification() {
      return this.auth.currentUser.then(user=>{
        user.sendEmailVerification().then(_=>{
          console.log('email verification sent');
        });
      });
    }

    createUserWithEmailAndPassword(email:string, password:string) : Promise<string>{
      return this.auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('register success');
          // Signed up 
          const user = userCredential.user;
          if(user && user.emailVerified === false){
            user.sendEmailVerification().then(function(){
              console.log("email verification sent to user");
            });
          }

          return user.uid;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          return null;
        });
    }

    signInWithEmailAndPassword(email:string, password:string) {
      return this.auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('signed in', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`login error ${errorCode} - ${errorMessage}`);
          throw error;
        });
    }
    
    SignInWithGooglePopUp() : Promise<Profile>{
      const provider = new GoogleAuthProvider();
      provider.addScope("email");
      return this.auth.signInWithPopup(provider)
        .then((result) => {
          console.log('You have been successfully logged in!', result);

          const info = result?.additionalUserInfo?.profile;
          console.log('info', info);
          
          const uid = result.user.uid;
          const email = result.user.email;
          const phone = result.user.phoneNumber;
          const photoUrl = result.user.photoURL;

          return {
            UserId:uid,
            FullName: `${info["given_name"]??""} ${info["family_name"]??""}`,
            FirstName: `${info["given_name"]??""}`,
            LastName: `${info["family_name"]??""}`,
            Email: email,
            Phone: phone,
            PhotoUrl: photoUrl
          } as Profile;
          // This gives you a Google Access Token. You can use it to access the Google API.
          //const token = result.user.getIdToken();
          //console.log('token', token);
          // The signed-in user info.
          //const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          console.log('google signin error', error);
          console.log('error code', error.code);
          console.log('error message', error.message);
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;

          return null;
          // The email of the user's account used.
          //const email = error.customData.email;
          // The AuthCredential type that was used.
          //const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

    SignInWithGoogleRedirect() {
      const provider = new GoogleAuthProvider();
      return this.auth.signInWithRedirect(provider);
    }

    getGoogleRedirectResult() {
      this.auth.getRedirectResult()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const token = result.user.getIdToken();

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }

    signInWithFacebookPopup() : Promise<Profile>{
      const provider = new FacebookAuthProvider();
      return this.auth.signInWithPopup(provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const accessToken = result.user.getIdToken();

          const uid = result.user.uid;
          const email = result.user.email;
          const phone = result.user.phoneNumber;
          const photoUrl = result.user.photoURL;
       
          const info = result?.additionalUserInfo?.profile;
          console.log('info', info);

          console.log('user', user);
          console.log('access token', accessToken);
          // IdP data available using getAdditionalUserInfo(result)
          // ...

          return {
            UserId:uid,
            FullName: `${info["first_name"]??""} ${info["last_name"]??""}`,
            FirstName: `${info["first_name"]??""}`,
            LastName: `${info["last_name"]??""}`,
            Email: email,
            Phone: phone,
            PhotoUrl: photoUrl
          } as Profile;
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          return null;
        });
    }

    SignInWithFacebookRedirect() {
      const provider = new FacebookAuthProvider();
      return this.auth.signInWithRedirect(provider);
    }

    getFacebookRedirectResult() {
      this.auth.getRedirectResult()
        .then((result) => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const token = result.user.getIdToken();

          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          // ...
        });
    }

    logout() {
      return this.auth.signOut().then(() => {
        localStorage.removeItem('user');
      });
    }

    updatePassword(newPassword:string) {
      this.auth.currentUser.then(user =>{
        user.updatePassword(newPassword).then(() => {
          // Update successful.
        }).catch((error) => {
          // An error ocurred
          // ...
        });
      });
    }

    sendPasswordResetEmail(email:string) {
      return this.auth.sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
}
