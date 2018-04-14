import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InformesService } from '../../servicios/informes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addinformes',
  templateUrl: './addinformes.component.html',
  styleUrls: ['./addinformes.component.css']
})
export class AddinformesComponent implements OnInit {

  informeForm: FormGroup;
  informe: any;

  constructor(private pf: FormBuilder,
              private informesService: InformesService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

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
      puntuacion: ['', Validators.required ],
      ofrenda: ['', Validators.required ],
      metrica: ['', Validators.required ]

    });

  }

  onSubmit(){
    this.informe = this.saveInforme();
    this.informesService.postInforme(this.informe)
      .subscribe(newinforme => {

      })
      confirm('Haz enviado tu informe. Pasaras a Estudios Personalizados.');
      if(confirm){
        this.router.navigate(['/login']);
      }
      this.informeForm.reset();
     
      }
    

    // newtask(){
    //   if(this.onSubmit){
    //     confirm('nueva ventana');
    //   }
    // }

    saveInforme(){
      const saveInforme = {
        lidercelula: this.informeForm.get('lidercelula').value,
        meta: this.informeForm.get('meta').value,
        semanaleccion: this.informeForm.get('semanaleccion').value,
        mepcol: this.informeForm.get('mepcol').value,
        celulacol: this.informeForm.get('celulacol').value,
        ebcol: this.informeForm.get('ebcol').value,
        cultocol: this.informeForm.get('cultocol').value,
        celulaami: this.informeForm.get('celulaami').value,
        ebami: this.informeForm.get('ebami').value,
        cultoami: this.informeForm.get('cultoami').value,
        puntuacion: this.informeForm.get('puntuacion').value,
        ofrenda: this.informeForm.get('ofrenda').value,
        metrica: this.informeForm.get('metrica').value
      }

      return saveInforme;
    }
  }