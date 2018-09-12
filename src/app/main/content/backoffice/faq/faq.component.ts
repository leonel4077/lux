import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { FuseUtils } from '../../../../core/fuseUtils';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Array<any> = [{perguntas:'Como ver meus Bônus',respostas:'Verifique a pagina Meus Bonus'},
                      {perguntas:'Como ver meus Ganhos',respostas:'Verifique a pagina Meus Ganhos'}
                    ];
    faqsFiltered: any;
    step = 0;
    searchInput;
    onFaqsChanged: Subscription;

    constructor()
    {
        this.searchInput = new FormControl('');
    }

    ngOnInit()
    {
        

        
    }

    setStep(index: number)
    {
        this.step = index;
    }

    nextStep()
    {
        this.step++;
    }

    prevStep()
    {
        this.step--;
    }

    ngOnDestroy()
    {
        //this.onFaqsChanged.unsubscribe();
    }

}
