import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Se realizo un segundo servicio, para iniciar sesion o cerrar sesion con el Usuario de Firebase

  constructor(private AngAuth: AngularFireAuth,private router: Router) { }

  //Ejecuta una consulta de iniciar sesion, el cual responde el email SOLO SI, inicia sesion
  login(email:string, pass:string){
    return new Promise((resolve, rejected) => {
      this.AngAuth.auth.signInWithEmailAndPassword(email,pass).then(email =>{
        resolve(email);
      }).catch(err => rejected(err))
    });
  }

  //Se cierra sesion del usuario de Firebase y se prosigue a mostrar la pagina para que el usuario se loguee
  logout(){
    this.AngAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
