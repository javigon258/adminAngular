import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels') public doughnutChartLabels: string[] = [];
  @Input('ChartDatos') public doughnutChartData: number[] = [];
  @Input('ChartType') public doughnutChartType: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
