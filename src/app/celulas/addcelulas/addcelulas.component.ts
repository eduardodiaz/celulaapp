import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CelulasService } from '../../servicios/celulas.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-addcelulas',
  templateUrl: './addcelulas.component.html',
  styleUrls: ['./addcelulas.component.css']
})
export class AddcelulasComponent implements OnInit {

  celulaForm: FormGroup;
  celula: any;

  constructor(private pf: FormBuilder,
              private celulaService: CelulasService, public toastr: ToastsManager, vcr: ViewContainerRef) {
                this.toastr.setRootViewContainerRef(vcr);
   }
     
   showSuccess() {
     this.toastr.success('You are awesome!', 'Success!');
   }

  ngOnInit() {
    this.celulaForm = this.pf.group({
      nocelula: ['', Validators.required ],
      lider: ['', Validators.required ],
      nocolaboradores: ['', Validators.required],
      direccion: ['', Validators.required ],
      hrreunion: ['', Validators.required ],
      diareunion: ['', Validators.required ],
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
      hrreunion: this.celulaForm.get('hrreunion').value,
      diareunion: this.celulaForm.get('diareunion').value,
      pastorzona: this.celulaForm.get('pastorzona').value,
      supaux: this.celulaForm.get('supaux').value,
      supsec: this.celulaForm.get('supsec').value,


    }

    return saveCelula;
  }

}
