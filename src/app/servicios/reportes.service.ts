import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ReportesService {

  reportesURL = 'https://appcelula-391e5.firebaseio.com/reportes.json';
  reporteURL = 'https://appcelula-391e5.firebaseio.com/reportes';


  constructor(private http: Http) { }

  postReporte(reporte: any){
    const newreporte = JSON.stringify(reporte);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.reportesURL, newreporte, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }

  getReportes(){
    return this.http.get(this.reportesURL)
      .map(
        res => res.json()
      );
  }

  getReporte(id$: string){
    const url = `${this.reporteURL}/${id$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  putReporte(reporte: any, id$: string){
    const newreporte = JSON.stringify(reporte);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.reporteURL}/${id$}.json`;

    return this.http.put(url, newreporte, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  delReporte(id$: string){
    const url = `${this.reporteURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('estos cambios no se podran recuperr, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map( res => res.json());
      }
    }
  }

  getReporteFecha(busqueda: string){
    //indica cual sera el campo a buscar
    const url = (`${this.reportesURL }?orderBy="fecha"&startAt="${ busqueda }"&endAt="${busqueda}\uf8ff"`)
    return this.http.get(url)
      .map( res=> res.json());
  }

 
}
