import { Component, OnInit } from '@angular/core';
import { CelulasService } from '../../servicios/celulas.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-celulas',
  templateUrl: './celulas.component.html',
  styleUrls: ['./celulas.component.css']
})
export class CelulasComponent implements OnInit {
  campoBusqueda: FormControl;
  busqueda: string;

  celulas: any[] = [];
  cargando = false;

  resultados = false;
  noresultados = false;
  
  constructor(private celulasService: CelulasService) { 
    // this.celulasService.getCelula()
    //   .subscribe(celulas => {
    //     this.celulas = [];
    //     for(const id$ in celulas){
    //       const p = celulas[id$];
    //       p.id$ = id$;
    //       this.celulas.push(celulas[id$]);
    //     }
    //     this.cargando = false;
      
    //   })
  }

  ngOnInit() {
    //this.celulas = this.celulasService.getCelulas();
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        if(this.busqueda.length !== 0){
          this.celulasService.getCelulaLider(this.busqueda)
            .subscribe(celulas => {
              this.celulas = [];
              for(const id$ in celulas){
                const p = celulas[id$];
                p.id$ = id$;
                this.celulas.push(celulas[id$]);
              }
              if(this.celulas.length < 1 && this.busqueda.length <= 1){
                this.noresultados = true;
              } else {
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.celulas = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
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
