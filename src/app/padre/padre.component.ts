import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { 
  }

  mensajeHijo: Array<Usuario> = new Array<Usuario>();
  saludo: string | undefined;
  input: any;

  ngOnInit(): void {
    this.mensajeHijo = [
      {idUsuario: 1, nombre: 'Karem', edad: 22, estado: true},
      {idUsuario: 2, nombre: 'Giovanna', edad: 23, estado: true}
    ]
    
  }

  public recibirSaludo($event: any): void {
    console.log($event);
    this.saludo = $event;
  }

}
