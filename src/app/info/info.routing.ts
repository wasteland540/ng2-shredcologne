import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent} from './info.component';

const infoRoutes: Routes = [
    {
        path: '',
        component: InfoComponent,
    }    
];

export const infoRouting: ModuleWithProviders = RouterModule.forChild(infoRoutes);