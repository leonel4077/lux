import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../core/animations';


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  animations : fuseAnimations 
})
export class DownloadsComponent implements OnInit {

  photosVideos: any;
  
  constructor() { }

  ngOnInit() {
  }

}
