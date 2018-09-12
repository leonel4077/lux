import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuseUtils } from '../../../../../core/fuseUtils';
import { fuseAnimations } from '../../../../../core/animations';


@Component({
    selector   : 'fuse-loja-details',
    templateUrl: './loja-details.component.html',
    styleUrls  : ['./loja-details.component.scss'],
    animations : fuseAnimations
})
export class FuseLojaDetailsComponent implements OnInit, OnDestroy
{
    
    tags: any[];
    formType: string;
    todoForm: FormGroup;
    @ViewChild('titleInput') titleInputField;

    onFormChange: any;
    onCurrentTodoChanged: Subscription;
    onTagsChanged: Subscription;
    onNewTodoClicked: Subscription;

    constructor(
        
        private formBuilder: FormBuilder
    )
    {

    }

    ngOnInit()
    {
        

        
    }

    focusTitleField()
    {
        setTimeout(() => {
            this.titleInputField.nativeElement.focus();
        });
    }

    createTodoForm()
    {
        
    }

    toggleStar(event)
    {
        
    }

    toggleImportant(event)
    {
       
    }

    /**
     * Toggle Completed
     * @param event
     */
    toggleCompleted(event)
    {
        
    }

    /**
     * Toggle Deleted
     * @param event
     */
    toggleDeleted(event)
    {
        
    }

    toggleTagOnTodo(tagId)
    {
        
    }

    addTodo()
    {
        
    }

    ngOnDestroy()
    {
        
    }
}
