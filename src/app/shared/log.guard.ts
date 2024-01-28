import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export const logGuard: CanActivateFn = (route, state) => {
  let authService=inject(AuthService);
  let router =inject(Router);
  authentifie : Boolean;

  return authService.isLogged()
  .then (authentifie => {
    if (authentifie)
    {
      console.log("Vous etes user, navigation authorisee");
      return true;
    }
    else{
      console.log("Vous n'etes pas user, navigation refusee");
      router.navigate(["/home"]);
      return false;
    }
  })
  .catch (err => {
    console.log("Erreur de navigation");
    router.navigate(["/home"]);
    return false;
  })

}