import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
    email: string;
    password: string;

    constructor(private auth: AuthService, private router: Router) {
        
    }

    login(): void{
        this.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(success => this.router.navigate(['admin']));
    }
}