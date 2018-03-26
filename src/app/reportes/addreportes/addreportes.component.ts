import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addreportes',
  templateUrl: './addreportes.component.html',
  styleUrls: ['./addreportes.component.css']
})
export class AddreportesComponent implements OnInit {

  reporteForm: FormGroup;
  reporte: any;

  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.reporteForm = this.pf.group({
      fecha: ['', Validators.required ],
      semanaleccion: ['', Validators.required ],
      verbo: ['', Validators.required ],
      evento: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.reporte = this.saveReporte();
  }

  saveReporte(){
    const saveReporte = {
      fecha: this.reporteForm.get('fecha').value,
      semanaleccion: this.reporteForm.get('semanaleccion').value,
      verbo: this.reporteForm.get('verbo').value,
      evento: this.reporteForm.get('evento').value, 
    }

    return saveReporte;
  }

}
