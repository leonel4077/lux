import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { fuseAnimations } from '../../core/animations';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../../notification.service';
import { FuseConfigService } from '../../core/services/config.service';
import { MatSnackBar } from '@angular/material';


@Component({
    selector   : 'fuse-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
    animations : fuseAnimations,
    providers : [NotificationService]
})
export class FuseLoginComponent implements OnInit
{
   
    loginForm: FormGroup;
    loginFormErrors: any;
    errorCredentials = false;

    constructor(
        
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router : Router,
        private notify: NotificationService,
        private fuseConfig: FuseConfigService,
        private snackBar: MatSnackBar
    )
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.loginFormErrors = {
            id   : {},
            password: {}
        };
    }

    ngOnInit()
    {
        
        this.loginForm = this.formBuilder.group({
            id   : ['', [Validators.required]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onSubmit(){
      this.authService.login(this.loginForm.value).subscribe(
          (resp) => {
              this.router.navigate(['backoffice/dashboard']);
          },
          (errorResponse:HttpErrorResponse) => {
              console.log(errorResponse);
              if (errorResponse.status === 400) {
                this.snackBar.open(`Erro de autenticação, verifique os dados`, 'X', {
                    duration: 2000,
                  }); 
                this.errorCredentials = true;
            }
              if (errorResponse.status === 401) {
                this.snackBar.open(`Usuário não autorizado, verifique os dados de login`, 'X', {
                    duration: 2000,
                  });
                  this.errorCredentials = true;
              }
              if (errorResponse.status === 500) {
                this.snackBar.open(`Houve algum problema com o servidor`, 'X', {
                    duration: 2000
                  }); 
                this.errorCredentials = true;
            }


            }
      );  
    }

    onLoginFormValuesChanged()
    {
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }
}
