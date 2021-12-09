import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../model/Usuario';
import { PadreService } from '../services/padre.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(private servicePadre: PadreService) { 
  }

  mensajeHijo: Array<Usuario> = new Array<Usuario>();
  saludo: string | undefined;
  input: any;

  formUsuario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl('')
  })

  public enviarDatos(): void {
    console.log('Envio los datos');
    console.log(this.formUsuario.get("nombre")?.value)

    let usuario = {
      nombre: this.formUsuario.get("nombre")?.value,
      apellido: this.formUsuario.get("nombre")?.value,
      telefono: this.formUsuario.get("nombre")?.value,
      email: this.formUsuario.get("nombre")?.value
      
    }
    this.servicePadre.enviarUsuario(usuario).subscribe(respuestaSub => console.log(respuestaSub));
  }



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
