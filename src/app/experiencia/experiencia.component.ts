import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
     //Inicializar variables de instancia para almacenar los datos con los que trata el Servicio.
    //En este caso inicializamos solamente progresos porque es un array. va con any porque cualquier tipo de dato.
    //Va con corchetes porque es una lista vacía.

    experiencias: any = [];

    //Inyectar el Servicio para tener acceso en la clase a los Métodos.

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
     //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio.
     this.portfolioService.getDatos().subscribe(data => {console.log(data);
      //Definir información a mostrar
      this.experiencias = data.experiencias;

    });
  }

}
