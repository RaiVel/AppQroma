import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario} from '../class/usuario';
import { Producto} from '../class/producto';
import { Premio} from '../class/premio';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  //Se crea el servicio de consulta de APIs, desde el cual se setea los URL que necesita para cada consulta

  //Se Presento un problema con los API brindados en el documento, el encabezado en la respuesta del servidor 
  //no era reconocido por el HttpClient, por lo que he tenido que usar un Proxy para obtener los datos desde
  // los API brindados. Se utilizo un proxy online, el cual es cors_anywhere

  //Documentación del problema: https://medium.com/@baphemot/understanding-cors-18ad6b478e2b
  //Proxy utilizado: https://www.npmjs.com/package/cors-anywhere

  private cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
  
  private url = 'https://blooming-falls-18368.herokuapp.com/';

  //ruta de las apis de consulta
  private cliente = 'info_clientes/';
  private producto = 'info_puntos/';
  private premio = 'info_premios/';

  user: Usuario;

  constructor(
    private http: HttpClient
  ) { }

  getUser(codigo: string){
    return this.http.get<Usuario>(this.cors_anywhere+this.url+this.cliente+codigo);
  }

  getProduct(codigo: Number){
    return this.http.get<Producto[]>(this.cors_anywhere+this.url+this.producto+codigo);
  }

  getPrize(codigo: Number){
    return this.http.get<Premio[]>(this.cors_anywhere+this.url+this.premio+codigo);
  }
}