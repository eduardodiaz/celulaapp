import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InformesService } from '../../servicios/informes.service';


@Component({
  selector: 'app-addinformes',
  templateUrl: './addinformes.component.html',
  styleUrls: ['./addinformes.component.css']
})
export class AddinformesComponent implements OnInit {

  informeForm: FormGroup;
  informe: any;

  constructor(private pf: FormBuilder,
              private informesService: InformesService) { }

  ngOnInit() {
    this.informeForm = this.pf.group({
      lidercelula: ['', Validators.required ],
      semanaleccion: ['', Validators.required ],
      mepcol: ['', Validators.required ],
      celulacol: ['', Validators.required ],
      ebcol: ['', Validators.required ],
      cultocol: ['', Validators.required ],
      celulaami: ['', Validators.required ],
      ebami: ['', Validators.required ],
      cultoami: ['', Validators.required ],
      puntos: ['', Validators.required ],
      dinero: ['', Validators.required ],
      meta: ['', Validators.required ]

    });

  }

  onSubmit(){
    this.informe = this.saveInforme();
    this.informesService.postInforme(this.informe)
      .subscribe(newinforme => {

      })
      this.informeForm.reset();
      confirm('Felicidades, has enviado tu reporte, deseas llenar EP?');
        if(confirm){
          confirm('pasaras al formulario de EP');
        }
      }
    

    newtask(){
      if(this.onSubmit){
        confirm('nueva ventana');
      }
    }

    saveInforme(){
      const saveInforme = {
        lidercelula: this.informeForm.get('lidercelula').value,
        semanaleccion: this.informeForm.get('semanaleccion').value,
        mepcol: this.informeForm.get('mepcol').value,
        celulacol: this.informeForm.get('celulacol').value,
        ebcol: this.informeForm.get('ebcol').value,
        cultocol: this.informeForm.get('cultocol').value,
        celulaami: this.informeForm.get('celulaami').value,
        ebami: this.informeForm.get('ebami').value,
        cultoami: this.informeForm.get('cultoami').value,
        puntuacion: this.informeForm.get('puntos').value,
        ofrenda: this.informeForm.get('dinero').value,
        logrometa: this.informeForm.get('meta').value
      }

      return saveInforme;
    }
  }