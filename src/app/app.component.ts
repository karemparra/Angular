import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre: string = "Karem";
  public nombres: string[] = ["Karem", "Giovanna"];
  public nombres2: string[] = ["Yaneth", "Moreno"];
  public nombres3: string[];
  public listUsers: Usuario[] = []; 

  public imagenURL = "https://placeimg.com/400/200/any";
  public activedButton:boolean = false;

  constructor(){
    this.addFirstElement('Jhosep');
    this.addLastElement('Nestor');
    this.deleteLastElement();
    this.nombres3 = this.concat(this.nombres2);
  
    console.log(this.nombres);
    console.log(this.nombres3.sort());
    console.log(this.nombres3.reverse());

    let usuario1:Usuario = new Usuario();
    let usuario2:Usuario = new Usuario();
    let usuario3:Usuario = new Usuario();
    
    usuario1.idUsuario = 123;
    usuario1.nombre = "Luis";
    usuario1.edad = 23;
    usuario1.estado = true;

    usuario2.idUsuario = 124;
    usuario2.nombre = "Beto";
    usuario2.edad = 24;
    usuario2.estado = true;
    
    usuario3.idUsuario = 125;
    usuario3.nombre = "Dani";
    usuario3.edad = 25;
    usuario3.estado = true;

    this.listUsers.push(usuario1);
    this.listUsers.push(usuario2);
    this.listUsers.push(usuario3);

    this.eliminarPorId(123);

  }

  public addFirstElement(nombre: string): void {
    this.nombres.unshift(nombre);
  }

  public addLastElement(nombre: string): void {
    this.nombres.push(nombre);
  }

  public deleteLastElement(): void {
    let res = this.nombres.pop();
    console.log('se eliminó el registro: ' + res);
  }

  public concat(list:string[]): string[] {
    return this.nombres.concat(list);
  }

  public eliminarPorId(id:number): void {
    for(const iterator of this.listUsers) {
      if(iterator.idUsuario == id){
        console.log(iterator);
        this.listUsers.splice(this.listUsers.indexOf(iterator));
      }
    }
  }

  public desactivarBoton(data : boolean): void {
    this.activedButton = data;
  }

  public mostrarEvento(event:any): void {
    //console.log(event);
    console.log("El enter fue presionado");
  }


}


