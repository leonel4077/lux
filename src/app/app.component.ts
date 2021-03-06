import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private translate: TranslateService
    )
    {
        // Add languages
        this.translate.addLangs(['br','en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('br');

        // Use a language
        this.translate.use('br');
    }
}
