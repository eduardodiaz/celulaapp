import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportesService } from '../../servicios/reportes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addreportes',
  templateUrl: './addreportes.component.html',
  styleUrls: ['./addreportes.component.css']
})
export class AddreportesComponent implements OnInit {

  reporteForm: FormGroup;
  reporte: any;

  constructor(private pf: FormBuilder,
              private reportesService: ReportesService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.reporteForm = this.pf.group({
      fecha: ['', Validators.required ],
      proceso: ['', Validators.required ],
      cuatrimestre: ['', Validators.required ],
      semana: ['', Validators.required ],
      verbo: ['', Validators.required ],
      evento: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.reporte = this.saveReporte();
    this.reportesService.postReporte(this.reporte)
      .subscribe(newreporte => {

      })
      this.reporteForm.reset();
  }

  saveReporte(){
    const saveReporte = {
      fecha: this.reporteForm.get('fecha').value,
      proceso: this.reporteForm.get('proceso').value,
      cuatrimestre: this.reporteForm.get('cuatrimestre').value,
      semana: this.reporteForm.get('semana').value, 
      verbo: this.reporteForm.get('verbo').value, 
      evento: this.reporteForm.get('evento').value
    }

    return saveReporte;
  }

}
