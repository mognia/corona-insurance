import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {isDoctor} from 'corona-interface/ethereum'
@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    isDoctor().then(function (val) {
      return val
    });
  }
}
