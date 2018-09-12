import { Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector     : 'fuse-loja-list-item',
    templateUrl  : './loja-list-item.component.html',
    styleUrls    : ['./loja-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseLojaListItemComponent implements OnInit, OnDestroy
{
    
    tags: any[];
    @HostBinding('class.selected') selected: boolean;
    @HostBinding('class.completed') completed: boolean;
    @HostBinding('class.move-disabled') moveDisabled: boolean;

    onSelectedTodosChanged: Subscription;
    onTagsChanged: Subscription;

    constructor(
        
        private route: ActivatedRoute
    )
    {
        // Disable move if path is not /all
        if ( route.snapshot.url[0].path !== 'all' )
        {
            this.moveDisabled = true;
        }
    }

    ngOnInit()
    {
        
    }

    ngOnDestroy()
    {
        this.onSelectedTodosChanged.unsubscribe();
    }

    onSelectedChange()
    {
        
    }

    /**
     * Toggle star
     */
    toggleStar(event)
    {
        event.stopPropagation();

        
    }

    /**
     * Toggle Important
     */
    toggleImportant(event)
    {
        event.stopPropagation();

        
    }

    /**
     * Toggle Completed
     */
    toggleCompleted(event)
    {
        event.stopPropagation();

        
    }
}
