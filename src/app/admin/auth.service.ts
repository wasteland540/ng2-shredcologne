import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private _user: firebase.User;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    afAuth.authState.subscribe(user => this._user = user);  
  }

  get user(): firebase.User {
    return this._user;
  }

  set user(value: firebase.User) {
    this._user = value;
  }

  get authenticated(): boolean {
    return this._user !== null;
  }

  get id(): string {
    return this.authenticated ? this.user.uid : '';
  }

  signInWithEmailAndPassword(email: string, password: string) : firebase.Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

}