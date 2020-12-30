import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        //this.router.navigate(['appareils']);              , private router: Route
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
