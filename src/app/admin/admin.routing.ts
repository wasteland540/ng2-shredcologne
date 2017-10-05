import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from './admin.component';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminNewsComponent } from './news/admin-news.component';
import { AdminRiderComponent } from './rider/admin-rider.component';
import { AuthGuard } from './auth.guard';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard], //applies for all children
        children: [
            {
                path: 'news',
                component: AdminNewsComponent,
            },
            {
                path: 'rider',
                component: AdminRiderComponent,
            },
        ]
    },
    {
        path: 'login',
        component: AdminLoginComponent,
    },  
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);