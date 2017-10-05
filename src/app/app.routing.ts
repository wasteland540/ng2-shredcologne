import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent} from './news/news.component';
import { RegistrationComponent} from './registration/registration.component';
import { RiderlistComponent} from './riderlist/riderlist.component';
import { NotFoundComponent } from './not-found/not-found.component';

//order is important! router goes from top to bottom and the first match will execute
const appRoutes: Routes = [
    { path: '', component: NewsComponent },
    { 
        path: 'info', 
        loadChildren: 'app/info/info.module#InfoModule' //lazy loading; we need a module.ts and and extra routing.ts for the module!
    },
    { 
        path: 'videos', 
        loadChildren: 'app/videos/videos.module#VideoModule' //lazy loading
    },
    { 
        path: 'sponsors', 
        loadChildren: 'app/sponsors/sponsors.module#SponsorModule' //lazy loading
    },
    { path: 'registration', component: RegistrationComponent },
    { path: 'riderlist', component: RiderlistComponent },
    { 
        path: 'admin', 
        loadChildren: 'app/admin/admin.module#AdminModule' //lazy loading
    },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);