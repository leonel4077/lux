import { MinharedeService } from './minharede.service';
import { LUX_API } from './../../../../app.api';
import { Usuario } from './minharede.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSnackBar} from '@angular/material';
import { NotificationService } from '../../../../notification.service';
import { AuthService } from '../../../../auth/services/auth.service';


@Component({
  selector: 'app-minharede',
  templateUrl: './minharede.component.html',
  styleUrls: ['./minharede.component.scss'],
  providers:[MinharedeService]
  
})
export class MinharedeComponent implements OnInit {

 
  displayedColumns = ['avatar', 'id', 'nome','telefone','cidade','estado','ativo', 'acoes'];
  dataSource: MatTableDataSource<Usuario>;
  usuario: Usuario[];
  isProgressBar : boolean = false;
  rede: string;
  
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serv: MinharedeService, private auth : AuthService, private snackBar: MatSnackBar ) {    
  }

  ngOnInit() {
    this.isProgressBar = true;
    this.serv.getDados(this.auth.getUser().id)
      .subscribe((data : any) => {
        this.usuario = data;
        this.dataSource = new MatTableDataSource(this.usuario);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isProgressBar = false;
      });
      
  }
  openDir($id) {
    this.serv.getDados($id)
      .subscribe((data : any) => {
        this.usuario = data;
        this.dataSource = new MatTableDataSource(this.usuario);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isProgressBar = false;
        this.rede = $id;
      });
  }
  
  openSnackBar(nome:string) {
    this.snackBar.open(`${nome}`, 'X', {
      duration: 2000,
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
}
