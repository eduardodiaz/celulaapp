import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CelulasService } from '../../servicios/celulas.service';

@Component({
  selector: 'app-addcelulas',
  templateUrl: './addcelulas.component.html',
  styleUrls: ['./addcelulas.component.css']
})
export class AddcelulasComponent implements OnInit {

  celulaForm: FormGroup;
  celula: any;

  constructor(private pf: FormBuilder,
              private celulaService: CelulasService) { }

  ngOnInit() {
    this.celulaForm = this.pf.group({
      nocelula: ['', Validators.required ],
      lider: ['', Validators.required ],
      nocolaboradores: ['', Validators.required],
      direccion: ['', Validators.required ],
      dhreunion: ['', Validators.required ],
      pastorzona: ['', Validators.required],
      supaux: ['', Validators.required ],
      supsec: ['', Validators.required ]

    });
  }

  onSubmit(){
    this.celula = this.saveCelula();
    this.celulaService.postCelula(this.celula)
      .subscribe(newcelula => {
        
      })
      this.celulaForm.reset();
  }

  saveCelula(){
    const saveCelula = {
      nocelula: this.celulaForm.get('nocelula').value,
      lider: this.celulaForm.get('lider').value,
      nocolaboradores: this.celulaForm.get('nocolaboradores').value,
      direccion: this.celulaForm.get('direccion').value,
      dhreunion: this.celulaForm.get('dhreunion').value,
      pastorzona: this.celulaForm.get('pastorzona').value,
      supaux: this.celulaForm.get('supaux').value,
      supsec: this.celulaForm.get('supsec').value,


    }

    return saveCelula;
  }

}
