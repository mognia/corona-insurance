import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {isAdmin} from 'corona-interface/ethereum'
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAdmin;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    return  isAdmin().then(function (val) {

      return val;
    });
  }
}

