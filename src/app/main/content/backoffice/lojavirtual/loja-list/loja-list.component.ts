import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
    selector   : 'fuse-loja-list',
    templateUrl: './loja-list.component.html',
    styleUrls  : ['./loja-list.component.scss'],
    animations : fuseAnimations
})
export class FuseLojaListComponent implements OnInit, OnDestroy
{
    
    onTodosChanged: Subscription;
    onCurrentTodoChanged: Subscription;

    constructor(
        private route: ActivatedRoute,
        private location: Location
    )
    {
    }

    ngOnInit()
    {
        // Subscribe to update todos on changes
       
        // Subscribe to update current todo on changes
       
    }

    ngOnDestroy()
    {
        
    }

    /**
     * Read todo
     * @param todoId
     */
    readTodo(todoId)
    {
        // Set current todo
        
    }

    onDrop(ev)
    {
        
    }
}
