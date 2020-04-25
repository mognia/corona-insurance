import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {isDoctor, isAdmin} from 'corona-interface/ethereum'

@Injectable({
    providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any {
        return isDoctor().then(function (val) {
            if (val) {
                return true
            } else {

               return  isAdmin().then(function (admin) {
                  return admin
                });

            }
        });

    }
}
