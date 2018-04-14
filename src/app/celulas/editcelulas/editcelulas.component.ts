import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CelulasService } from '../../servicios/celulas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editcelulas',
  templateUrl: './editcelulas.component.html',
  styleUrls: ['./editcelulas.component.css']
})
export class EditcelulasComponent implements OnInit {

  celulaForm: FormGroup;
  celula: any;
  id: string;

  constructor(private pf: FormBuilder,
              private celulaService: CelulasService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params
                  .subscribe( parametros => {
                    this.id = parametros['id'];
                    this.celulaService.getCel(this.id)
                      .subscribe(celula => this.celula = celula)
                  });
              }

  ngOnInit() {
    this.celulaForm = this.pf.group({
      nocelula: ['', Validators.required ],
      lider: ['', Validators.required ],
      nocolaboradores: ['', Validators.required ],
      direccion: ['', Validators.required ],
      hrreunion: ['', Validators.required ],
      diareunion: ['', Validators.required ], 
      pastorzona: ['', Validators.required ],
      supaux: ['', Validators.required ],
      supsec: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.celula = this.saveCelula();
    this.celulaService.putCel(this.celula, this.id)
      .subscribe(newcelula => {
        this.router.navigate(['/celulas'])
      })
      this.celulaForm.reset();
  }


  saveCelula(){
    const saveCelula = {
      nocelula: this.celulaForm.get('nocelula').value,
      lider: this.celulaForm.get('lider').value,
      nocolaboradores: this.celulaForm.get('nocolaboradores').value,
      direccion: this.celulaForm.get('direccion').value,
      hrreunion: this.celulaForm.get('hrreunion').value,
      diareunion: this.celulaForm.get('diareunion').value,
      pastorzona: this.celulaForm.get('pastorzona').value,
      supaux: this.celulaForm.get('supaux').value,
      supsec: this.celulaForm.get('supsec').value,

    }

    return saveCelula;
  }

}
