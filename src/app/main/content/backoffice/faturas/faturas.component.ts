import { FaturasService } from './faturas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { NotificationService } from '../../../../notification.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Faturas } from './faturas.model';

@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.scss'],
  providers:[FaturasService,NotificationService]
})
export class FaturasComponent implements OnInit {

  displayedColumns = ['controle','franquia','cidade','estado','tipo_venda','data_venda', 'total_venda', 'acoes'];
  dataSource: MatTableDataSource<Faturas>;
  pagamentos : Faturas[];
  isProgressBar : boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serv: FaturasService,private notify: NotificationService, private auth : AuthService) { }

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
