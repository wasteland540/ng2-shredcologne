import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Rider } from '../shared/models/rider';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    newRider: Rider = new Rider();
    riders: FirebaseListObservable<Rider[]>;

    constructor(private db: AngularFireDatabase) {

    }

    ngOnInit(): void {
        this.riders = this.db.list('/riders');
    }   

    submitRider(): void{
        //https://github.com/angular/angularfire2/issues/305
        //we need to rehtink the model structure or create a "thridIndex"... (because we need to filter the list by two values)
        //this time i prefer the "thridIndex" method.

        this.newRider.isSelected = false;
        this.newRider.isOk = false;
        this.newRider.isOkCategory = this.newRider.isOk + "" + this.newRider.category;
        this.riders.push(this.newRider);

        //TODO: clean way...
        this.newRider = new Rider();
    }
}