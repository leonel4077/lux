import { MatPaginator, MatPaginatorIntl } from '@angular/material';

export class CustomPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = ' próxima pagina';
    this.previousPageLabel = ' pagina anterior';
    this.itemsPerPageLabel = 'Itens por página';
  }
}