import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import { Usuario} from '../class/usuario';
import { ActivatedRoute } from "@angular/router";
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {

  //Se inicializan las variables globales de la pagina, asi como valores que se visualizaran en el front
  user: Usuario;
  val_subir: Number;
  val_mantener: Number;
  per_subir: Number;
  per_mantener: Number;
  hoy: string;

  constructor(public alertController: AlertController, private router: Router, private route: ActivatedRoute, private restService: RestService, private FireAuth : AngularFireAuth) {}
  ngOnInit() {
    //Se obtiene el horario del instante en el que se hacen las consultas
    this.hoy = new Date().toLocaleString().slice(0,15);
    //Se obtiene el usuario que se encuentra logueado en el aplicativo desde el usuariod e Firebase
    this.getUser();
  }

  getUser(){
    //Consulta a Firebase que usuario es el que esta logqueado y se filtra el codigo usuario de su email,
    //para consulta al api los datos de este usuario (EJ. 123@qroma.com -> cod_cliente: 123)
    this.FireAuth.authState.subscribe(data => {
      this.restService.getUser(data.email.split('@')[0]).subscribe(  
        (usuario) => {
          //Se almacena el usuario en una variable global de la pagina y se calcular
          //mediante opraciones aritmeticas, las cantidades que le falta al usuario para mantener o subir de categoria
          this.user = usuario;
          this.val_subir = this.user.cuota_subir.valueOf() - this.user.avance.valueOf();
          this.per_subir = 1 - this.val_subir.valueOf()/this.user.cuota_subir.valueOf();
          this.val_mantener = this.user.cuota_mantener.valueOf() - this.user.avance.valueOf();
          this.per_mantener = 1 - this.val_mantener.valueOf()/this.user.cuota_mantener.valueOf();
      },
      (error) =>{
        console.error(error);
      }
      );
      return data.uid;
    });
  }

}
