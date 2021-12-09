import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { 
  }

  mensaje: string = "Soy el padre";
  saludo: string | undefined;
  input: any;
  value: Date | undefined;
  

  ngOnInit(): void {
    // this.mensajeHijo = [
    //   {idUsuario: 1, nombre: 'Karem', edad: 22, estado: true},
    //   {idUsuario: 2, nombre: 'Giovanna', edad: 23, estado: true}
    // ]
    
  }

  public recibirSaludo($event: any): void {
    console.log($event);
    this.saludo = $event;
  }
  

}

