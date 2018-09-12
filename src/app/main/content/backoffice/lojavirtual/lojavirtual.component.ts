import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../core/animations';

@Component({
  selector: 'app-lojavirtual',
  templateUrl: './lojavirtual.component.html',
  styleUrls: ['./lojavirtual.component.scss'],
  animations : fuseAnimations
})
export class LojavirtualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
