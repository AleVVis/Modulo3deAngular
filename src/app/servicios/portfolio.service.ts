//Esto es para poder hacer las peticiones.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Esto es para suscribirse y recibir respuesta de forma asíncrona.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//El primer http se llama alias, el que está en minúsuculas.
  constructor(private http:HttpClient) { }

//Método observable que devuelve los datos
getDatos():Observable<any>{
  //Se llama al json con su path -ruta-, o bien, en su lugar 
  //se puede poner una URL para traer datos de un json online.
  return this.http.get('./assets/json/datos.json');
}
}
