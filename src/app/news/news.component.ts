import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { News } from '../shared/models/news';

@Component({
  selector: 'news-content',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    title = 'NEWS';
    news: FirebaseListObservable<News[]>;
    user;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.user = afAuth.authState; //ng2@shredcologne.com | test123

        /* TODO: in service auslagern?
        afAuth.authState.subscribe(res => {
            if (res && res.uid) {
              console.log('user is logged in');
            } else {
              console.log('user not logged in');
            }
          });
          */
    }
    
    ngOnInit(): void {
        this.news = this.db.list('/news');

        /*
        let news = new News();
        news.content = 'my test content';
        news.title = 'test title';
        news.imageUrl = 'bla/assets/images/placeholder.png';  //maybe we don't need this anymore!

        this.news.push(news); //we need a user in firebase for updating data!
        */

        
    }   

    /*
    addNews(){
        let news = new News();
        news.content = 'my test content 222';
        news.title = 'test title 2222';
        news.imageUrl = 'bla/assets/images/placeholder.png';  //maybe we don't need this anymore!
        news.date = new Date().toString(); //TODO: need to be timestamp?
        console.log(news);

        this.news.push(news); //we need a user in firebase for updating data!
    }
    
    
    login(){
        this.afAuth.auth.signInWithEmailAndPassword('ng2@shredcologne.com', 'test123')
        .then((success) => {
            console.log(success);
        })
        .catch((err) => console.log(err));
    }

    logout(){
        this.afAuth.auth.signOut();
    }
    */
}