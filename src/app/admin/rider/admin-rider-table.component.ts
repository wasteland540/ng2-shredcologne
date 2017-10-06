import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

import { Rider } from '../../shared/models/rider';

@Component({
  selector: 'admin-rider-table',
  templateUrl: './admin-rider-table.component.html',
  styleUrls: ['./admin-rider-table.component.css']
})
export class AdminRiderTableComponent {
    @Input() header: string;
    @Input() riders: FirebaseListObservable<Rider[]>;
    @Input() showSponsors: boolean;
    @Output() riderSelected = new EventEmitter();
    
    addToSelection(rider:Rider){
        rider.isSelected = !rider.isSelected;

        this.riderSelected.emit({selectedRider: rider});
    }
}