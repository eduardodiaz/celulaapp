import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { UsuariosService } from './servicios/usuarios.service';
import { CelulasService } from './servicios/celulas.service';
import { HeaderComponent } from './header/header.component';
import { AddusuariosComponent } from './usuarios/addusuarios/addusuarios.component';
import { CelulasComponent } from './celulas/celulas/celulas.component';
import { AddcelulasComponent } from './celulas/addcelulas/addcelulas.component';
import { ReportesComponent } from './reportes/reportes/reportes.component';
import { AddreportesComponent } from './reportes/addreportes/addreportes.component';
import { ReportesService } from './servicios/reportes.service';
//import { GraficasComponent } from './graficos/graficas/graficas.component';
//import { BarrasComponent } from './graficos/barras/barras.component';
import { InformesComponent } from './informes/informes/informes.component';
import { AddinformesComponent } from './informes/addinformes/addinformes.component';
import { ConcentradoComponent } from './concentrado/concentrado/concentrado.component';
import { EdittusuariosComponent } from './usuarios/edittusuarios/edittusuarios.component';
import { EditcelulasComponent } from './celulas/editcelulas/editcelulas.component';
import { InformesService } from './servicios/informes.service';
import { IniciosesionComponent } from './autentificacion/iniciosesion/iniciosesion.component';
import { AutentificacionService } from './servicios/autentificacion.service';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { GuardService } from './servicios/guard.service';
import { AyudaComponent } from './ayuda/ayuda/ayuda.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios', component: UsuariosComponent,
  canActivate: [GuardService] },
  { path: 'addusuarios', component: AddusuariosComponent,
  canActivate: [GuardService] },
  { path: 'editusuarios/:id', component: EdittusuariosComponent,
  canActivate: [GuardService] },
  { path: 'celulas', component: CelulasComponent,
  canActivate: [GuardService]},
  { path: 'addcelulas', component: AddcelulasComponent,
  canActivate: [GuardService] },
  { path: 'editcelulas/:id', component: EditcelulasComponent,
  canActivate: [GuardService]},
  { path: 'reportes', component: ReportesComponent,
  canActivate: [GuardService] },
  { path: 'addreportes', component: AddreportesComponent,
  canActivate: [GuardService] }, 
 // { path: 'graficas', component: GraficasComponent },
 //{ path: 'barra', component: BarrasComponent },
  { path: 'informes', component: InformesComponent,
  canActivate: [GuardService] },
  { path: 'addinformes', component: AddinformesComponent,
  canActivate: [GuardService] },
  { path: 'concentrado', component: ConcentradoComponent,
  canActivate: [GuardService]},
  { path: 'login', component: IniciosesionComponent},
  { path: 'registro', component: RegistroComponent,
  canActivate: [GuardService] }, 
  { path: 'ayuda', component: AyudaComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HeaderComponent,
    InicioComponent,
    AddusuariosComponent,
    CelulasComponent,
    AddcelulasComponent,
    ReportesComponent,
    AddreportesComponent,
    //GraficasComponent,
    //BarrasComponent,
    InformesComponent,
    AddinformesComponent,
    ConcentradoComponent,
    EdittusuariosComponent,
    EditcelulasComponent,
    IniciosesionComponent,
    RegistroComponent,
    AyudaComponent,
    
    
    //AddcelulasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    FormsModule, 
    ReactiveFormsModule,
    //ChartsModule,
    //AngularFireDatabaseModule,
    HttpModule,
    BrowserAnimationsModule, ToastModule.forRoot()
  ],
  providers: [ 
    UsuariosService,
    CelulasService,
    ReportesService,
    InformesService,
    AutentificacionService, 
    GuardService 
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
