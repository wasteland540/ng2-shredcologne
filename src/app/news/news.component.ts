import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { News } from '../shared/models/news';

@Component({
  selector: 'news-content',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    news: FirebaseListObservable<News[]>;

    constructor(private db: AngularFireDatabase) {

    }
    
    ngOnInit(): void {        
        //TODO: is there a way to lazy load iframes content???      

        this.news = this.db.list('/news',{
            query: {
                orderByChild: 'orderDate'                
              }
        });
    }   
}