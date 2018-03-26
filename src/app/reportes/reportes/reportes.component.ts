import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../servicios/reportes.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  reportes: any;

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.reportes = this.reportesService.getReportes();
  }

}
