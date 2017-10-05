import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { appRouting } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './news/news.component';
import { QuickInfoModule } from './quickinfo/quickinfo.module';
import { RegistrationComponent} from './registration/registration.component';
import { RiderlistComponent} from './riderlist/riderlist.component';

import { SafePipe } from './shared/safe-pipe/safe-pipe'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NewsComponent,
    RegistrationComponent,
    RiderlistComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    QuickInfoModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
