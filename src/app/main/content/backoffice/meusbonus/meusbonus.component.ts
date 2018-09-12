import { Pagamentos } from './meusbonus.model';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MeusbonusService } from './meusbonus.service';
import { NotificationService } from '../../../../notification.service';
import { AuthService } from '../../../../auth/services/auth.service';
import { ViewDialogComponent } from './dialogs/view/view.dialog.component';

@Component({
  selector: 'app-meusbonus',
  templateUrl: './meusbonus.component.html',
  styleUrls: ['./meusbonus.component.scss'],
  providers:[MeusbonusService,NotificationService]
})
export class MeusbonusComponent implements OnInit {

  displayedColumns = ['descricao', 'documento', 'pagamento', 'valor_pago' ,'acoes'];
  dataSource: MatTableDataSource<Pagamentos>;
  pagamentos : Pagamentos[];
  isProgressBar : boolean = false;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private serv: MeusbonusService, private notify: NotificationService, private auth : AuthService) { }

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

  openDialog(i: number, descricao: string, documento: string, pagamento: Date, valor_pago: number) {
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      data:{descricao: descricao, documento: documento, data: pagamento, valor : valor_pago }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
    
      
    

    
}
}
