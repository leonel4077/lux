import {MatSnackBar} from '@angular/material';
import {Injectable,Component,Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: 'custom-snackbar',
    template: '<mat-grid-list cols="4" class="orange-400-bg" rowHeight="1:1"><mat-grid-tile colspan="1"><mat-icon>{{data.icon}}</mat-icon></mat-grid-tile><mat-grid-tile colspan="3">{{data.message}}</mat-grid-tile></mat-grid-list>' // You may also use a HTML file
})
export class CustomSnackbarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}

@Injectable()
export class NotificationService {
    constructor(public snackBar: MatSnackBar) {
    }
    success(message:string) {
        this.snackBar.openFromComponent(CustomSnackbarComponent,{
            duration: 3000,
            data: {message: message,icon : 'done'}
          });
    }
         
    error(message:string) {
        this.snackBar.openFromComponent(CustomSnackbarComponent,{
            duration: 3000,
            data: {message: message,icon : 'warning'}
          });
    }
}
