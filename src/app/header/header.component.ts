import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Router, ActivatedRoute } from  '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autenficacionService: AutentificacionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth(){
    return this.autenficacionService.isAuthenticated();
  }

  onLogout(){
    
    if(confirm('Estas a punto de salir, En realidad quieres cerrar sesion?')){
      this.autenficacionService.logout();
      //this.router.navigate(['/inicio']);
    } else {
      this.router.navigate(['/inicio']);
    }
    
  }

}
