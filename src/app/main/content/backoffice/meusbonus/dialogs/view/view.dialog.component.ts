import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../../../../../auth/services/auth.service';


@Component({
  selector: 'app-view.dialog',
  templateUrl: '../../dialogs/view/view.dialog.html',
  styleUrls: ['../../dialogs/view/view.dialog.scss']
})
export class ViewDialogComponent {

  constructor(public dialogRef: MatDialogRef<ViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService) { 
                
              }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}