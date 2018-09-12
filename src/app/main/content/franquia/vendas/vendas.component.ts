import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {VendasService} from './vendas.service';
import { FuseConfigService } from '../../../../core/services/config.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
  providers:[VendasService]
})
export class VendasComponent implements OnInit {

  constructor(private fuseConfig: FuseConfigService) {
    this.fuseConfig.setSettings({
      layout: {
          navigation: 'top',
          toolbar   : 'above',
          footer    : 'none'
      }
  });   
  }
    
  ngOnInit() {   
  }

  

}
