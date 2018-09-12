export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Aplicação',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'dashboard',
                        'title': 'Dashboard',
                        'type' : 'item',
                        'icon' : 'home',
                        'url'  : '/backoffice/dashboard',
                        
                    },
                    {
                        'id'   : 'meusganhos',
                        'title': 'Meus Ganhos',
                        'type' : 'item',
                        'icon' : 'credit_card',
                        'url'  : '/backoffice/meusganhos',
                        
                    },
                    {
                        'id'   : 'desempenho',
                        'title': 'Desempenho',
                        'type' : 'item',
                        'icon' : 'assessment',
                        'url'  : '/backoffice/desempenho',
                        
                    },
                    {
                        'id'   : 'meusbonus',
                        'title': 'Meus Bônus',
                        'type' : 'item',
                        'icon' : 'trending_up',
                        'url'  : '/backoffice/meusbonus',
                        
                    },
                    {
                        'id'   : 'minharede',
                        'title': 'Minha Rede',
                        'type' : 'item',
                        'icon' : 'supervisor_account',
                        'url'  : '/backoffice/minharede',
                        
                    },
                   /* {
                        'id'   : 'lojavirtual',
                        'title': 'Loja Virtual',
                        'type' : 'item',
                        'icon' : 'shopping_cart',
                        'url'  : '/lojavirtual',
                        
                    },*/
                    {
                        'id'   : 'downloads',
                        'title': 'Downloads',
                        'type' : 'item',
                        'icon' : 'vertical_align_bottom',
                        'url'  : '/backoffice/downloads',
                        
                    },
                    /*{
                        'id'   : 'relatorios',
                        'title': 'Relatórios',
                        'type' : 'collapse',
                        'icon' : 'event_note',
                        'children': [
                            {
                                'id'   : 'meusbonus',    
                                'title': 'Meus Bônus',
                                'type' : 'item',
                                'url'  : '/meusbonus'
                                
                            },
                            {
                                'id'   : 'minharede',    
                                'title': 'Minha Rede',
                                'type' : 'item',
                                'url'  : '/minharede'
                                
                            },
                            
                        ]
                    },*/
                    {
                        'id'   : 'suporte',
                        'title': 'Suporte',
                        'type' : 'item',
                        'icon' : 'chat',
                        'url'  : '/backoffice/suporte',
                        
                    },
                    {
                        'id'   : 'faturas',
                        'title': 'Faturas',
                        'type' : 'item',
                        'icon' : 'receipt',
                        'url'  : '/backoffice/faturas',
                        
                    },
                    {
                        'id'   : 'vml',
                        'title': 'VML',
                        'type' : 'item',
                        'icon' : 'grid_on',
                        'url'  : '/backoffice/vml',
                        
                    },
                    {
                        'id'   : 'faq',
                        'title': 'FAQ',
                        'type' : 'item',
                        'icon' : 'help',
                        'url'  : '/backoffice/faq',
                        
                    },

                ]
            }
        ];
    }
}
