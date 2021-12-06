import { Component } from '@angular/core';

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


  constructor(){
    this.addFirstElement('Jhosep');
    this.addLastElement('Nestor');
    this.deleteLastElement();
    this.nombres3 = this.concat(this.nombres2);
  
    console.log(this.nombres);
    console.log(this.nombres3.sort());
    console.log(this.nombres3.reverse());

    let usuario:Usuario = new Usuario();
    usuario.
    
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

}


