import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../servicios/reportes.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;

  reportes: any[] = [];
  cargando = false;

  resultados = false;
  noresultados = false;

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        if(this.busqueda.length !== 0){
          this.reportesService.getReporteFecha(this.busqueda)
            .subscribe(reportes => {
              this.reportes = [];
              for(const id$ in reportes){
                const p = reportes[id$];
                p.id$ = id$;
                this.reportes.push(reportes[id$]);
              }
              if(this.reportes.length < 1 && this.busqueda.length <1 ){
                this.noresultados = true;
              } else {
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
          } else {
            this.reportes = [];
            this.cargando = false;
            this.resultados = false;
          }
      });
        }
      }
