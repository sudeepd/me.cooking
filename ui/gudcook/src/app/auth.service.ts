import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {COACHES, SEEKERS} from './mock-data';
import {Coach} from './models';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


function pickRandomArrayItem(input : any[]) {
  let min = 0;
  let max = input.length - 1;
  let index = Math.floor(Math.random() * (max - min + 1)) + min; 
  return input[index];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  getLoggedInUser() : Observable<string> {
    if ( Math.random() >= 0.5) {
      let coach: Coach = pickRandomArrayItem(COACHES);
      return of(coach.email);
    } else {
      let seeker: Coach = pickRandomArrayItem(SEEKERS);
      return of(seeker.email);
    }
  }
  
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return this._firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }  

  signInWithPassword(email, password) {
    return this._firebaseAuth.signInWithEmailAndPassword(email,password)
  }  

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  
  logout() {
    this._firebaseAuth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}
