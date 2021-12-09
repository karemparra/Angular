import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PadreService {

  constructor(private http: HttpClient) { }

  public enviarUsuario(datosUsuario: any) {
    return this.http.post<any>(environment.protocol + environment.localhost + 'usuario', datosUsuario);
  }
}
