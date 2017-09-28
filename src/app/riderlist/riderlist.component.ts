import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Rider } from '../shared/models/rider';

@Component({
  selector: 'riderlist',
  templateUrl: './riderlist.component.html',
  styleUrls: ['./riderlist.component.css']
})
export class RiderlistComponent implements OnInit {
    ridersJunior: FirebaseListObservable<Rider[]>;
    ridersGirls: FirebaseListObservable<Rider[]>;
    ridersAm: FirebaseListObservable<Rider[]>;
    ridersPro: FirebaseListObservable<Rider[]>;
    ridersSenior: FirebaseListObservable<Rider[]>;

    constructor(private db: AngularFireDatabase) {

    }

    ngOnInit(): void {
        this.ridersJunior = this.db.list('/riders', {
            query: {
              orderByChild: 'isOkCategory',
              equalTo: 'true1' 
            }
        });

        this.ridersGirls = this.db.list('/riders', {
            query: {
              orderByChild: 'isOkCategory',
              equalTo: 'true2' 
            }
        });

        this.ridersAm = this.db.list('/riders', {
            query: {
              orderByChild: 'isOkCategory',
              equalTo: 'true3'
            }
        });

        this.ridersPro = this.db.list('/riders', {
            query: {
              orderByChild: 'isOkCategory',
              equalTo: 'true4'
            }
        });

        this.ridersSenior = this.db.list('/riders', {
            query: {
              orderByChild: 'isOkCategory',
              equalTo: 'true5' 
            }
        });
    }   

}