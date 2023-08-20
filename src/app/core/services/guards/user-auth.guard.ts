import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class userAuthGuard implements CanActivate{
    constructor(
      private authService: AuthService,
      private router: Router) { }
    canActivate(){
      if (this.authService.isLogged()) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
}
