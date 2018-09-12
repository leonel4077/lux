import { fuseAnimations } from './../../../../core/animations';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { FuseConfigService } from '../../../../core/services/config.service';
import * as shape from 'd3-shape';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations : fuseAnimations,
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {

  dados : any[];
 
  single : any[] = [];
  
  view: any[] = [1200, 300];

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
    domain: ['#FE3A82']
  };

  qualificacoes : any[] = [
    {value: 'blue_diamond', viewValue: 'BLUE DIAMOND'},
    {value: 'red_diamond', viewValue: 'RED DIAMOND'},
    {value: 'gold', viewValue: 'GOLD'}
  ];

  constructor(private serv: DashboardService, private auth : AuthService, private router : Router,private fuseConfig: FuseConfigService) { 
    
      this.fuseConfig.setSettings({
        layout: {
            navigation: 'top',
            toolbar   : 'above',
            footer    : 'none'
        }
    });
    this.serv.getDados(this.auth.getUser().id)
      .subscribe((data : any) => {
        this.single = data;
        Object.assign(this.single);
        
      });
  }

  ngOnInit() {
    if (this.auth.check() === false) {
      this.router.navigate(['auth/login']);
    }
    this.serv.getDb(this.auth.getUser().id)
      .subscribe((data : any) => {
        this.dados = data;
        
      });
  }

}
