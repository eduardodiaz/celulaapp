import { Component, OnInit } from '@angular/core';
import { InformesService } from '../../servicios/informes.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-concentrado',
  templateUrl: './concentrado.component.html',
  styleUrls: ['./concentrado.component.css']
})
export class ConcentradoComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;

  informes: any[] = [];
  cargando = false;

  resultados = false;
  noresultados = false;

  constructor(private informesService: InformesService) { }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        if(this.busqueda.length !== 0){
          this.informesService.getInformeFecha(this.busqueda)
            .subscribe(informes => {
              this.informes = [];
              for(const id$ in informes){
                const p = informes[id$];
                p.id$ = id$;
                this.informes.push(informes[id$]);
              }
              if(this.informes.length < 1 && this.busqueda.length <= 1){
                this.noresultados = true;
              } else {
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.informes = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
  }

}
