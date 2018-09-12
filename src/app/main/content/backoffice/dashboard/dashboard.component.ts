import { fuseAnimations } from './../../../../core/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations : fuseAnimations,
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {

  dados : any[];
 
  constructor(private serv: DashboardService, private auth : AuthService, private router : Router) { }

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
