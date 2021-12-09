import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  
  @Input() recibido:string ='';
  mensajito: string ='SOy un mensajito de prueba';

  ngOnInit(): void {
  }


}
