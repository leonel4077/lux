import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { Ganhos } from './meusganhos.model';
import { AuthService } from '../../../../auth/services/auth.service';
import { MeusganhosService } from './meusganhos.service';


@Component({
  selector: 'app-meusganhos',
  templateUrl: './meusganhos.component.html',
  styleUrls: ['./meusganhos.component.scss'],
  providers:[MeusganhosService]
})
export class MeusganhosComponent implements OnInit {

  displayedColumns = ['bonus_nivel','bonus_pontuacao','bonus_percentual','bonus_valor'];
  dataSource: MatTableDataSource<Ganhos>;
  dados: any[];
  dadositens: Ganhos[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private serv : MeusganhosService, private auth : AuthService) { }

  ngOnInit() {
  	this.serv.getBonus(this.auth.getUser().id)
      .subscribe((data : any) => {
        this.dados = data;
        console.log(this.dados);
      });
  }

  getItens($bonus){
  	this.serv.getDados(this.auth.getUser().id, $bonus)
  	.subscribe((data : any) => {
        this.dadositens = data;
        this.dataSource = new MatTableDataSource(this.dadositens);
        this.dataSource.paginator = this.paginator;
        console.log(this.dadositens);
      });
  }

}

