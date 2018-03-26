import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class InformesService {

  informesURL = 'https://appcelula-391e5.firebaseio.com/informes.json';
  informeURL = 'https://appcelula-391e5.firebaseio.com/informes';

  constructor(private http: Http) { }

  postInforme(informe: any){
    const newinforme = JSON.stringify(informe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.informesURL, newinforme, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }

  getInformes(){
    return this.http.get(this.informesURL)
      .map(
        res => res.json()
      );
  }

  getInforme(id$: string){
    const url = `${this.informeURL}/${id$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  putInforme(informe: any, id$: string){
    const newinforme = JSON.stringify(informe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.informeURL}/${id$}.json`;

    return this.http.put(url, newinforme, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  delInforme(id$: string){
    const url = `${this.informeURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('estos cambios no se podran recuperr, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map( res => res.json());
      }
    }
  }
}
