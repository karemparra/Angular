import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  
  @Input() recibido:Array<Usuario> | undefined;
  @Output() enviarPapa = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public enviar(): void {
    this.enviarPapa.emit("Hola papi");  
  }

}
