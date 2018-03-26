import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CelulasService {

  celulaURL = 'https://appcelula-391e5.firebaseio.com/celulas.json';
  celURL = 'https://appcelula-391e5.firebaseio.com/celulas';

  constructor(private http: Http) { }

  postCelula(celula: any){
    const newcelula = JSON.stringify(celula);
    const headers =  new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.celulaURL, newcelula, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getCelula(){
    return this.http.get(this.celulaURL)
      .map(
        res => res.json()
      );
  }

  getCel(id$: string){
    const url = `${this.celURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }

  putCel(celula: any, id$: string){
    const newcelula = JSON.stringify(celula);
    const headers = new Headers({
      'Content-type':'application/json'
    });
  
    const url = `${this.celURL}/${id$}.json`;

    return this.http.put(url, newcelula, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })  
  }

  delCel(id$: string){
    const url = `${this.celURL}/${id$}.json`;
    if(confirm('De verdad quieres borrar a esta celula?')){
      if(confirm('Estos cambios no podran recuperarse, de veradd deseas borrarlo?')){
        return this.http.delete(url)
          .map( res => res.json());
      }
    }
  }



}
