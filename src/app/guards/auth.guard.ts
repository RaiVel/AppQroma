import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras, CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { RestService } from '../servicios/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public restService: RestService,private FireAuth : AngularFireAuth, private router : Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{
    
    //Se creo los guards, lkos cuales son los premisos que tiene el usuario para poder acceder a las paginas del aplicativo
    //En el cual no se permite el acceso a la pagina principal si el usuario no cuenta con un cuenta logueada de Firebase

    //Cuando se inicia el aplicativo, busca si el usuario esta logueado, para que pueda acceder instantanemente, sin tener
    //que loguear otra vez. Esto ayuda a recordar el usuario en la aplicacion
    return this.FireAuth.authState.pipe(map(auth => {
      console.info(auth);
      if(isNullOrUndefined(auth)){
        this.router.navigateByUrl('/login');
        return false;
      }else {
        this.restService.getUser(auth.email.split('@')[0]).subscribe(  
          (usuario) => { 
            if (auth.email.split('@')[0] == usuario.cod_cliente){
              this.router.navigate(['']);
            }
        },
        (error) =>{
          console.error(error);
        }
        );
        return true;
      }
    }))
  }
}
