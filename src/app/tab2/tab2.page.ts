import { Component} from '@angular/core';
import { RestService } from '../servicios/rest.service';
import { Usuario} from '../class/usuario';
import { Producto} from '../class/producto';
import { Premio} from '../class/premio';
import {AngularFireAuth} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //Crea las variables gloables para el Tab2
  user: Usuario;
  productos: Producto[] = [];
  premios: Premio[] = [];

  //Se tiene en cuenta que el API de producto solo cuenta con 5 posibles consultas, por ello se setean
  list_producto: Number[] = [1,2,3,4,5];
  //Se tiene en cuenta el numero al que corresponde cada categoria (Oro, Plata, Bronce)
  list_premio: Number[] = [91,92,93];
  
  constructor(public alertController: AlertController,public restService: RestService,  private FireAuth : AngularFireAuth
    ) {}
    ngOnInit() {
      //Se inicia la pag2 obteniendo el usuario el cual esta Logueado (Desde Firebase)
      this.getUser();
    }

    getProductos(usuario : Usuario){
      //Se reinicia el valor en cada consulta, ya que si se loguean varias veces, estos productos se mantienen en la memoria
      this.productos= [];
      //Se realiza una consulta por cada Producto que exista (1,2,3,4,5)
      this.list_producto.forEach(id => {
        //Teniendo en cuenta que la consulta de productos debe tener una jerarquia, se crean variables para almacenar
        //la posicion del producto dependiendo de la categoria
        // pos_codcli: Posicion del producto para el codigo de cliente
        // pos_cat: Posicion del producto para categoria del cliente
        // pos_all: Posicion del producto para cualquier cliente

        var pos_codcli = null;
        var pos_cat = null;
        var pos_all = null;
        this.restService.getProduct(id).subscribe(
          (productos) => { 
            //Se obtiene la jeraquia de un producto y se analiza cada uno para almacenar el indice en la variable de jerarquia
            //correspondiente
            for (let index = 0; index < productos.length; index++){ 
              if (productos[index].cod_cliente === usuario.cod_cliente) {
                pos_codcli=index;
              }else if (productos[index].cod_cliente === usuario.socio){
                pos_cat=index;
              }else if (productos[index].cod_cliente === "Todos"){
                pos_all=index;
              }
            }

            //Al obtener la jerarquia del producto SOLO SE ALMACENA el producto con la jerarquia de los mas especifico a lo mas general
            if (pos_codcli !== null) {
              this.productos.push(productos[pos_codcli]);
            }else if (pos_cat !== null){
              this.productos.push(productos[pos_cat]);
            }else if (pos_all !== null){
              this.productos.push(productos[pos_all]);
            }
          },
          (error) =>{
            console.error(error);
          }
        )

      });
    }

    
    getPremios(usuario : Usuario){

      //Se inicializa el proceso limipiando la variables Premios, de igual manera que Productos
      //Tiene como input el usuario, ya que solo se busca obtener los premios de la categoria en la que se encuentra

      this.premios = [];
      var id;

      //Se especficia a que lista de premio (91,92,93) pertenece cada categoria
      if (usuario.socio === 'Oro'){
        id = this.list_premio[0];
      }else if (usuario.socio === 'Plata'){
        id = this.list_premio[1];
      }else if (usuario.socio === 'Bronce'){
        id = this.list_premio[2];
      }

      //Se obteien la lista de premios y se almacena en una variable global
      this.restService.getPrize(id)
      .subscribe(
        (premios) => { 
          this.premios = premios;
        },
        (error) =>{
          console.error(error);
        }
      )
    }

    getUser(){

      //Se obtiene el usuario logueado desde Firebase y se procede a obtener los productos y premios del usuario
      this.FireAuth.authState.subscribe(data => {
        this.restService.getUser(data.email.split('@')[0]).subscribe(  
          (usuario) => { 
            this.user = usuario;
            this.getProductos(this.user);
            this.getPremios(this.user);
        },
        (error) =>{
          console.error(error);
        }
        );
        return data.uid;
      });
    }

    //Se obtiene el premio o producto que se le hace click en la lista
      getPremio(premio: Premio) {
        this.premioAlert(premio);
    }

    getAcumular(prod: Producto) {
      this.acumularAlert(prod);
    }


    //Se genera la alerta del premio o producto, analizando si cuenta con los puntos necesarios para canjear el premio
   async premioAlert(premio: Premio) {

    //Dependiendo si tiene los puntos necesarios o no, se muestra un tipo de alerta distinta
    if (this.user.puntos> premio.pruntos){
      const alert = await this.alertController.create({
        header: 'Canjear '+premio.premio,
        message: 'Si tienes los puntos necesarios',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelo');
          }
        }, {
          text: 'Canjear',
          handler: () => {
            console.log('Canjear producto');
          }
        }]
      });
      await alert.present();

    }else {
      const alert = await this.alertController.create({
        header: 'Canjear '+premio.premio,
        message: 'No tienes los puntos necesarios',
        buttons: ['Okay']
      });
      await alert.present();
    }
  }

  async acumularAlert(prod: Producto) {

    const alert = await this.alertController.create({
      header: 'Comprar '+prod.nombre_producto,
      subHeader: 'El producto acumula '+prod.puntos+' puntos',
      message: 'Acercarse a la tienda mas cercana para acumular los puntos',
      buttons: ['Okay']
    });
    await alert.present();
  }
}
