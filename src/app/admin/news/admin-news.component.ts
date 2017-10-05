import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { News } from '../../shared/models/news';

@Component({
  selector: 'admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {
  newNews: News = new News();
  news: FirebaseListObservable<News[]>;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit(): void {
      this.news = this.db.list('/news');
  }   

  submitNews(): void {
    this.news.push(this.newNews);

    //TODO: clean way...
    this.newNews = new News();
  }
}