import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth'
import {map} from 'rxjs/operators'
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(private FireAuth : AngularFireAuth, private router : Router){}

  //Se creo los guards, lkos cuales son los premisos que tiene el usuario para poder acceder a las paginas del aplicativo
  //En el cual no se permite el acceso a la pagina principal si el usuario no cuenta con un cuenta logueada de Firebase
  //Esto permite que si el usuario de firebase es eliminado remotamente, el aplicativo cerrar la sesion de manera instantanea

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
    
    return this.FireAuth.authState.pipe(map(auth => {
      console.info(auth);
      if(isNullOrUndefined(auth)){
        return true;
      }else {
        this.router.navigateByUrl('/');
        return false;
      }
    }))
  }
}
