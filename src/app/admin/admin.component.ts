import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Component({
  selector: 'admin-overview',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private auth: AuthService, private router: Router){

  }

  logout(): void{
    this.auth.signOut();
    this.router.navigate(['']);
  }
}