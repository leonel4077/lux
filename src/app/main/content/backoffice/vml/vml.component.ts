import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Vml } from './vml.model';
import { VmlService } from './vml.service';
import { NotificationService } from '../../../../notification.service';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-vml',
  templateUrl: './vml.component.html',
  styleUrls: ['./vml.component.scss'],
  providers:[VmlService,NotificationService]

})
export class VmlComponent implements OnInit {

  displayedColumns = ['avatar','id', 'nome', 'percentual', 'pontuacao', 'max_linha'];
  dataSource: MatTableDataSource<Vml>;
  pagamentos : Vml[];
  isProgressBar : boolean = false;
  
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serv: VmlService,private notify: NotificationService, private auth : AuthService) { }

  ngOnInit() {
    this.isProgressBar = true;
    this.serv.getDados(this.auth.getUser().id)
      .subscribe((data : any) => {
        this.pagamentos = data;
        this.dataSource = new MatTableDataSource(this.pagamentos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isProgressBar = false;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
