import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UsuariosService {

  usuarioURL = 'https://appcelula-391e5.firebaseio.com/usuarios.json';
  userURL = 'https://appcelula-391e5.firebaseio.com/usuarios';

  constructor(private http: Http) { }

  postUsuario(usuario: any){
    const newusuario = JSON.stringify(usuario);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.usuarioURL, newusuario, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getUsuario(){
    return this.http.get(this.usuarioURL)
      .map(
        res => res.json()
      );
  }

  getUser(id$: string){
    const url = `${this.userURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }

  putUser(usuario: any, id$: string){
    const newusuario = JSON.stringify(usuario);
    const headers = new Headers({
      'Content-Type':'application/json'
    });

    const url = `${this.userURL}/${id$}.json`;

    return this.http.put(url, newusuario, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  delUser(id$: string){
    const url = `${this.userURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}

  getUsuariosSearch(busqueda: string){
    //indica cual sera el campo a buscar
    const url = `${this.usuarioURL}?orderBy="tipousuario"&startAt="${busqueda}"&&endAt="${busqueda}\uf8ff"`
    return this.http.get(url)
      .map( res=> res.json());
  }

}
