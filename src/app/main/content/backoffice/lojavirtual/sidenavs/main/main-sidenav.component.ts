import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { fuseAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'fuse-loja-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styleUrls  : ['./main-sidenav.component.scss'],
    animations : fuseAnimations
})
export class FuseLojaMainSidenavComponent implements OnInit, OnDestroy
{
    folders: any[];
    filters: any[];
    tags: any[];
    accounts: object;
    selectedAccount: string;

    onFiltersChanged: Subscription;
    onTagsChanged: Subscription;

    constructor(private router: Router)
    {
        // Data
        this.accounts = {
            'creapond'    : 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };

        this.selectedAccount = 'creapond';
    }

    ngOnInit()
    {
        
    }

    ngOnDestroy()
    {
        
    }

    newTodo()
    {
        
    }
}
