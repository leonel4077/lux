import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';
import { AuthService } from '../../../../auth/services/auth.service';
import {DesempenhoService} from './desempenho.service';

@Component({
  selector: 'app-desempenho',
  templateUrl: './desempenho.component.html',
  styleUrls: ['./desempenho.component.scss'],
  providers:[DesempenhoService]
})
export class DesempenhoComponent implements OnInit {

  single : any[] = [];
  dados : any[]; 

  view: any[] = [600, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Ganhos';

  colorScheme = {
    domain: ['#FE2E64']
  };

  qualificacoes : any[] = [
    {value: 'blue_diamond', viewValue: 'BLUE DIAMOND'},
    {value: 'red_diamond', viewValue: 'RED DIAMOND'},
    {value: 'gold', viewValue: 'GOLD'}
  ];


  constructor(private serv: DesempenhoService, private auth: AuthService) {
    this.serv.getDados(this.auth.getUser().id)
      .subscribe((data : any) => {
        this.single = data;
        Object.assign(this.single);
        
      });
  }
    
  ngOnInit() {
    this.serv.getVml(this.auth.getUser().id, 7)
      .subscribe((data : any) => {
        this.dados = data;
        console.log(this.dados);
      });
  }

  onSelect(eventValue) {
    this.serv.getVml(this.auth.getUser().id, eventValue)
      .subscribe((data : any) => {
        this.dados = data;
        console.log(this.dados);
      });
  }

}
