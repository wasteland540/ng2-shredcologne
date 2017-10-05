import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AuthService } from "./auth.service";
import { AuthGuard } from './auth.guard';
import { adminRouting } from './admin.routing';
import { AdminComponent} from './admin.component';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminNewsComponent } from './news/admin-news.component';
import { AdminRiderComponent } from './rider/admin-rider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    adminRouting
  ],
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminNewsComponent,
    AdminRiderComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdminModule {}