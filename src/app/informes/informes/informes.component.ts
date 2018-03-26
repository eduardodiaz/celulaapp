import { Component, OnInit } from '@angular/core';
import { InformesService } from '../../servicios/informes.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  informes: any[] = [];
  cargando = true;

  constructor(private informesService: InformesService) {
    
    this.informesService.getInformes()
      .subscribe(informes => {
        this.informes = [];
        for(const id$ in informes){
          const p = informes[id$];
          p.id$ = id$;
          this.informes.push(informes[id$]);
        }
        this.cargando = false;
      })
   }

  ngOnInit() {
  }

}
