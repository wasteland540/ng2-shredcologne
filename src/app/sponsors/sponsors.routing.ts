import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorComponent} from './sponsors.component';

const sponsorRoutes: Routes = [
    {
        path: '',
        component: SponsorComponent,
    }    
];

export const sponsorRouting: ModuleWithProviders = RouterModule.forChild(sponsorRoutes);