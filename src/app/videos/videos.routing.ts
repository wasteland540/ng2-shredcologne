import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent} from './videos.component';

const videoRoutes: Routes = [
    {
        path: '',
        component: VideoComponent,
    }    
];

export const videoRouting: ModuleWithProviders = RouterModule.forChild(videoRoutes);