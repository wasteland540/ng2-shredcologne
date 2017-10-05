import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Rider } from '../../shared/models/rider';

@Component({
  selector: 'admin-rider',
  templateUrl: './admin-rider.component.html',
  styleUrls: ['./admin-rider.component.css']
})
export class AdminRiderComponent implements OnInit {
    ridersJunior: FirebaseListObservable<Rider[]>;
    ridersGirls: FirebaseListObservable<Rider[]>;
    ridersAm: FirebaseListObservable<Rider[]>;
    ridersPro: FirebaseListObservable<Rider[]>;
    ridersSenior: FirebaseListObservable<Rider[]>;

    selectedJunior: any[] = [];
    selectedGirls: any[] = [];
    selectedAm: any[] = [];
    selectedPro: any[] = [];
    selectedSenior: any[] = [];

    constructor(private db: AngularFireDatabase) {

    }

    ngOnInit(): void {
      this.ridersJunior = this.db.list('/riders', {
          query: {
            orderByChild: 'isOkCategory',
            equalTo: 'false1' 
          }
      });

      this.ridersGirls = this.db.list('/riders', {
          query: {
            orderByChild: 'isOkCategory',
            equalTo: 'false2' 
          }
      });

      this.ridersAm = this.db.list('/riders', {
          query: {
            orderByChild: 'isOkCategory',
            equalTo: 'false3'
          }
      });

      this.ridersPro = this.db.list('/riders', {
          query: {
            orderByChild: 'isOkCategory',
            equalTo: 'false4'
          }
      });

      this.ridersSenior = this.db.list('/riders', {
          query: {
            orderByChild: 'isOkCategory',
            equalTo: 'false5' 
          }
      });
    }

    addToSelection(rider:Rider){
      //TODO: highlight in view
      rider.isSelected = !rider.isSelected;

      if(rider.category == 1){
        this.selectedJunior.push(rider);
      }
      else if(rider.category == 2){
        this.selectedGirls.push(rider);
      }
      else if(rider.category == 3){
        this.selectedAm.push(rider);
      }
      else if(rider.category == 4){
        this.selectedPro.push(rider);
      }
      else if(rider.category == 5){
        this.selectedSenior.push(rider);
      }
    }

    releaseRiders(): void{
      this.selectedJunior.forEach((rider) => {
        this.updateRiderProperties(rider);
        this.ridersJunior.update(rider.$key, rider);
      });

      this.selectedGirls.forEach((rider) => {
        this.updateRiderProperties(rider);
        this.ridersGirls.update(rider.$key, rider);
      });

      this.selectedAm.forEach((rider) => {
        this.updateRiderProperties(rider);
        this.ridersAm.update(rider.$key, rider);
      });

      this.selectedPro.forEach((rider) => {
        this.updateRiderProperties(rider);
        this.ridersPro.update(rider.$key, rider);
      });

      this.selectedSenior.forEach((rider) => {
        this.updateRiderProperties(rider);
        this.ridersSenior.update(rider.$key, rider);
      });
    }

    deleteRiders(): void{
      this.selectedJunior.forEach((rider) => {
        this.ridersJunior.remove(rider.$key);
      });

      this.selectedGirls.forEach((rider) => {
        this.ridersGirls.remove(rider.$key);
      });

      this.selectedAm.forEach((rider) => {
        this.ridersAm.remove(rider.$key);
      });

      this.selectedPro.forEach((rider) => {
        this.ridersPro.remove(rider.$key);
      });

      this.selectedSenior.forEach((rider) => {
        this.ridersSenior.remove(rider.$key);
      });
    }

    updateRiderProperties(rider: any): void{
      rider.isSelected = false;
      rider.isOk = true;
      rider.isOkCategory = rider.isOk + "" + rider.category;
    }
}