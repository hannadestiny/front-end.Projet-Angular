import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService=inject(AuthService);
  let router =inject(Router);
 

  return authService.isAdmin()
  .then (authentifie => {
    if (authentifie)
    {
      console.log("Vous etes admin, navigation authorisee");
      return true;
    }
    else{
      console.log("Vous n'etes pas admin, navigation refusee");
      router.navigate(["/home"]);
      return false;
    }
  })
  
  .catch (err => {
    console.log("Erreur de navigation");
    router.navigate(["/home"]);
    return false;
  })
};
