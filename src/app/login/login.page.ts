import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../servicios/rest.service';
import { Usuario} from '../class/usuario';
import { AuthService} from '../servicios/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  //Se creo la pagina de login, el cual sera la primera vista del aplicativo,
  //Se seteo variables de la pagina, las cuales seran alimentadas desde el front

  user : Usuario;
  email: string;
  pass: string;

  constructor(private FireAuth : AngularFireAuth, private router: Router, public restService: RestService, private http: HttpClient, 
    private authService : AuthService) { }

  ngOnInit() {
  }

  getUser(codigo_cliente: string){
    //Se obtiene los datos del usuario en la base de datos y se compara con el usuario logueado en Firebase
    //Validando que los datos existan en Firebase y en la base de datos, prosiguiendo a navegar a la ruta principal
    this.restService.getUser(codigo_cliente).subscribe(  
      (usuario) => {
        if (codigo_cliente == usuario.cod_cliente){
          this.router.navigate(['']);
        }
    },
    (error) =>{
      console.error(error);
    }
    );
  }

  //Funcion que es llamada desde el front para loguear al usuario
  onLogin(){
    this.authService.login(this.email,this.pass).then( res => {
        this.getUser(this.email.split('@')[0])
    }).catch(err=> alert('Los datos son incorrectos'));
  }
}
