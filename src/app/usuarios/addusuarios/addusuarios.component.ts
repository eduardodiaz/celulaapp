import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';




@Component({
  selector: 'app-addusuarios',
  templateUrl: './addusuarios.component.html',
  styleUrls: ['./addusuarios.component.css']
})
export class AddusuariosComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: any;

  constructor(private pf: FormBuilder,
              private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioForm = this.pf.group({
      nombre: ['', Validators.required ],
      direccion: ['', Validators.required ],
      telefono: ['', Validators.required ],
      tipousuario: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email ]],
      /*'password': ['', [Validators.required, 
        Validators.pattern('^(?=.*[0-9])(?=/*[a-zA-Z])([a-zA-Z0-9]+$)'), 
        Validators.minLength(8)
      ]] */
    });
  }

  onSubmit(){
    this.usuario = this.saveUsuario();
    this.usuarioService.postUsuario(this.usuario)
      .subscribe(newusuario => {
        
      })
      this.usuarioForm.reset();
  }

  saveUsuario(){
    const saveUsuario = {
      nombre: this.usuarioForm.get('nombre').value,
      direccion: this.usuarioForm.get('direccion').value,
      telefono: this.usuarioForm.get('telefono').value,
      tipousuario: this.usuarioForm.get('tipousuario').value,
      email: this.usuarioForm.get('email').value,
     /* password: this.usuarioForm.get('password').value*/
    }

    return saveUsuario;
  }


}
