
import { Injectable,NgZone } from '@angular/core';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';

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
      this.auth.currentUser.then(user=>{
        user.sendEmailVerification().then(_=>{
          console.log('email verification sent');
        });
      });
    }

    createUserWithEmailAndPassword(email:string, password:string) {
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    signInWithEmailAndPassword(email:string, password:string) {
      return this.auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('signed in', user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`login error ${errorCode} - ${errorMessage}`);
        });
    }

    SignInWithGooglePopUp() {
      const provider = new GoogleAuthProvider();
      provider.addScope("email");
      this.auth.signInWithPopup(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
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

    SignInWithGoogleRedirect() {
      const provider = new GoogleAuthProvider();
      this.auth.signInWithRedirect(provider);
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

    signInWithFacebook() {
      const provider = new FacebookAuthProvider();
      this.auth.signInWithPopup(provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const accessToken = result.user.getIdToken();

          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    }

    SignInWithFacebookRedirect() {
      const provider = new FacebookAuthProvider();
      this.auth.signInWithRedirect(provider);
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
      this.auth.sendPasswordResetEmail(email)
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
