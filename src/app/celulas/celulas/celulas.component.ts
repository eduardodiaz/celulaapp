import { Component, OnInit } from '@angular/core';
import { CelulasService } from '../../servicios/celulas.service';


@Component({
  selector: 'app-celulas',
  templateUrl: './celulas.component.html',
  styleUrls: ['./celulas.component.css']
})
export class CelulasComponent implements OnInit {

  celulas: any[] = [];
  cargando = true;
  
  constructor(private celulasService: CelulasService) { 
    this.celulasService.getCelula()
      .subscribe(celulas => {
        this.celulas = [];
        for(const id$ in celulas){
          const p = celulas[id$];
          p.id$ = id$;
          this.celulas.push(celulas[id$]);
        }
        this.cargando = false;
      
      })
  }

  ngOnInit() {
    //this.celulas = this.celulasService.getCelulas();
  }

  eliminarCelula(id$){
    this.celulasService.delCel(id$)
      .subscribe( res=> {
        this.celulas = [];
        this.celulasService.getCelula()
          .subscribe(celulas => {
            for(const id$ in celulas){
              const p = celulas[id$];
              p.id$ = id$;
              this.celulas.push(celulas[id$]);
            }
          })
      })
  }
}
