import { Injectable } from '@angular/core';

@Injectable()
export class ReportesService {

  reportes: any = [
    {
      fecha: '',
      semanaleccion: 7,
      verbo: 'orar',
      evento: 'Fiesta del amigo'
    },
    {
      fecha: '',
      semanaleccion: 8,
      verbo: 'llevar',
      evento: 'Encuentro'
    }
  ]

  constructor() { }

  getReportes(){
    return this.reportes;
  }
}
