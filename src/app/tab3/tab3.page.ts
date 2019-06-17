import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../servicios/rest.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService} from '../servicios/auth.service'
import { Usuario} from '../class/usuario';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: Usuario;

  constructor(public alertController: AlertController,public restService: RestService,  private FireAuth : AngularFireAuth,private router: Router, private authService : AuthService) {}

  ngOnInit() {
      //Inicia el tab 3 obteniendo los datos del usuario registrado, para graficas los datos del mismo
      this.getUser();
    }

  onLogout(){
      //Cierra sesion del usuario de FireBase
      this.authService.logout();
  }

  getUser(){
    //Obtiene datos de la sesion en Firebase
    this.FireAuth.authState.subscribe(data => {
      //Filtra el codigo de usuario del EMAIL, para consultar el API con solo el codigo 
      //EJ: 123@qroma.com -> Consulta al API el usuario 123
      this.restService.getUser(data.email.split('@')[0]).subscribe(  
        (usuario) => { 
          //Obtiene el usuario y lo setea como variable global de la pagina
          this.user = usuario;
      },
      (error) =>{
        console.error(error);
      }
      );
      return data.uid;
    });
  }

  //Invoca el componente Alert para confirmar si el usuario desear cerrar sesion o no
  async LogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesion',
      message: 'Se cerrará la sesión, estas seguro?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }, {
        text: 'Okay',
        handler: () => {
          //Si el usuario confirma, cierra sesion
          this.onLogout();
        }
      }]
    });
    await alert.present();
  }

  //Invoca el componer Alert para presentar informacion sobre como contactar con QROMA
  async contactoAlert() {
    const alert = await this.alertController.create({
      header: 'Contactarnos',
      message: 'Ingrese a http://www.qroma.com.pe/',
      buttons: ['Okay']
    });
    await alert.present();
  }
}
