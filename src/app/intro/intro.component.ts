import { Component, OnInit } from '@angular/core';
//importar el Router para permitir la navegación a la pag principal
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
