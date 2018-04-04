import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittusuarios',
  templateUrl: './edittusuarios.component.html',
  styleUrls: ['./edittusuarios.component.css']
})
export class EdittusuariosComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: any;
  id: string;

  constructor(private pf: FormBuilder,
              private usuarioService: UsuariosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params
                  .subscribe( parametros => {
                    this.id = parametros['id'];
                    this.usuarioService.getUser(this.id)
                      .subscribe(usuario => this.usuario = usuario)
                  });
               }

  ngOnInit() {
    this.usuarioForm = this.pf.group({
      nombre: ['', Validators.required ],
      direccion: ['', Validators.required ],
      telefono: ['', Validators.required ],
      tipousuario: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email ] ]
      //password: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.usuario = this.saveUsuario();
    this.usuarioService.putUser(this.usuario, this.id)
      .subscribe(newusuario => {
        this.router.navigate(['/usuarios'])
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
      //password: this.usuarioForm.get('password').value
    }

    return saveUsuario;
  }

}
