import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  //esta es una forma pero no es la que va, xq sigue siendo hardcode, hay que usar el json.
  //nombre = 'Alejandra';

  //Inicializar variables de instancia para almacenar los datos con los que trata el Servicio.
  miNombre: string = '';
  miFoto: string = '';
  miTitulo: string = '';
  acercademi: string = '';

  //Inyectar el Servicio para tener acceso en la clase a los Métodos.
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
     //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio.
    this.portfolioService.getDatos().subscribe(data => {console.log(data);
     //Definir información a mostrar
    this.miNombre=data.miNombre;
    this.miFoto=data.miFoto;
    this.miTitulo=data.miTitulo;
    this.acercademi=data.acercademi;
    
  });
  }

}
