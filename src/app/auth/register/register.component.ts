import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../core/services/config.service';
import { fuseAnimations } from '../../core/animations';
import { RegisterService } from '../services/register.service';
import { NotificationService } from '../../notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector   : 'fuse-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss'],
    animations : fuseAnimations,
    providers:[NotificationService]
})
export class FuseRegisterComponent implements OnInit
{
    registerForm: FormGroup;
    registerFormErrors: any;
    

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private registerService : RegisterService,
        private notify: NotificationService 
    )
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.registerFormErrors = {
            idpatrocinador : {},
            name           : {},
            email          : {},
            password       : {},
            passwordConfirm: {}
        };
    }

    ngOnInit()
    {

        this.registerForm = this.formBuilder.group({
            idpatrocinador : ['', Validators.required],
            name           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', Validators.required]
        });

        this.registerForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        });
    }
    onSubmit(){
        this.registerService.register(this.registerForm.value).subscribe(
            resp => { 
                //console.log(resp);
                this.registerForm.reset();
                this.notify.success(resp);
            },
            (errorResponse:HttpErrorResponse) => {
                console.log(errorResponse);
                if (errorResponse.status === 400) {
                  this.notify.error('Erro de autenticação, verifique os dados');
                  
              }
                if (errorResponse.status === 401) {
                    this.notify.error('Usuário não autorizado, verifique os dados de login');
                    
                }
  
  
              }
        );  
      }
      
    onRegisterFormValuesChanged()
    {
        for ( const field in this.registerFormErrors )
        {
            if ( !this.registerFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }
}
