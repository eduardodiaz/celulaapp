import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  userdata: any;

  erroresForm ={
    'email': '',
    'password': ''
  }
  mensajeValidacion = {
    'email': {
      'required': 'Email Obligatorio',
      'email': 'Introduzca un email correcto'
    },
    'password': {
      'required': 'Contraseña Obligatoria',
      'pattern': 'La contraseña debe tener al menos un numero y una letra',
      'minLength': 'y mas de 6 caracteres' 

    }

  }

  constructor(private formBuilder: FormBuilder,
              private autenficacionService: AutentificacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email ]],
      'password': ['', [Validators.required, Validators.minLength(8), 
      Validators.pattern('^(?=.*[0-9])(?=/*[a-zA-Z])([a-zA-Z0-9]+$)') ]]
    })

    this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit(){
    this.userdata = this.saveUserdata();
    this.autenficacionService.registroUsuario(this.userdata);
    this.router.navigate(['/inicio']);
  }

  saveUserdata(){
    const saveUserdata = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }

    return saveUserdata;
  }

  onValueChanged(data?: any) {
    if (!this.registroForm) { return; }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajeValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
         }
       }
     }
   }
}
