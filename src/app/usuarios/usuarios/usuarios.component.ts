import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { CelulasService } from '../../servicios/celulas.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  campoBusqueda: FormControl;

  campoBusqueda1: FormControl;
  busqueda: string;

  usuarios: any[] = [];
  cargando = false;

  //cargando = false;
  resultados = false;
  noresultados = false;

  constructor(private usuariosService: UsuariosService) { 
    /*
    vacio
    */ 
    // this.usuariosService.getUsuario()
    //   .subscribe(usuarios => {
    //     this.usuarios = [];
    //     for(const id$ in usuarios) {
    //       const p = usuarios[id$];
    //       p.id$ = id$;
    //       this.usuarios.push(usuarios[id$]);
    //     }
    //     this.cargando = false;
    //   })
    
  }


  ngOnInit() {
    // this.campoBusqueda = new FormControl();
    // this.campoBusqueda.valueChanges
    //   .subscribe(term => {
    //     this.busqueda = term;
    //     this.cargando = true;
    //     if(this.busqueda.length !== 0){
    //       this.usuariosService.getUsuariosSearchtipo(this.busqueda)
    //         .subscribe(usuarios => {
    //           this.usuarios = [];
    //           for(const id$ in usuarios) {
    //             const p = usuarios[id$];
    //             p.id$ = id$;
    //             this.usuarios.push(usuarios[id$]);
    //           }
    //           if(this.usuarios.length < 1 && this.busqueda.length <= 1){
    //             this.noresultados = true;
    //           }else{
    //             this.noresultados = false;
    //           }
    //         })
    //         this.cargando = false;
    //         this.resultados = true;
    //     } else {
    //       this.usuarios = [];
    //       this.cargando = false;
    //       this.resultados = false;
    //     }
    //   });
      
      this.campoBusqueda = new FormControl();
      this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        if(this.busqueda.length !== 0){
          this.usuariosService.getUsuariosSearchnombre(this.busqueda)
            .subscribe(usuarios => {
              this.usuarios = [];
              for(const id$ in usuarios) {
                const p = usuarios[id$];
                p.id$ = id$;
                this.usuarios.push(usuarios[id$]);
              }
              if(this.usuarios.length < 1 && this.busqueda.length <= 1){
                this.noresultados = true;
              }else{
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.usuarios = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
    
  }

  eliminarUsuario(id$) {
    this.usuariosService.delUser(id$)
      .subscribe(res => {
        this.usuarios = [];
        this.usuariosService.getUsuario()
          .subscribe(usuarios => {
            for(const id$ in usuarios) {
              const p = usuarios[id$];
              p.id$ = id$;
              this.usuarios.push(usuarios[id$]);
        }
      })
    })
  } 
}
