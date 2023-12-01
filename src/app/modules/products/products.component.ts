import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, effect } from '@angular/core';
import {products} from 'src/app/shared/mocks/products';
import { SignalService } from 'src/app/shared/services/signal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('hoverAnimation', [
      state('in', style({ transform: 'scale(1.05)' })),
      transition('void => *', [
        style({ transform: 'scale(1)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ProductsComponent {

  hoverState: string | undefined;
  filteredProducts: any[];
  categories: any;
  selectedCategory: any = '';
  searchKeyword: any;

  constructor(private signal: SignalService) {
    this.filteredProducts = [...this.signal.products()];
    effect(() =>{
      this.categories = this.signal.categories();
      this.hoverState = this.signal.hoverState();
    });
  }


  toggleHoverState() {
    this.signal.hoverState.update((val) => this.hoverState === 'out' ? 'in' : 'out');
  }

  filterProducts(): void {
    this.signal.selectedCategory.update(() => this.selectedCategory);
    this.signal.searchKeyword.update((val) => this.searchKeyword);
    this.signal.filterByCategoryAndKeyword();
    this.filteredProducts = this.signal.filteredProducts();
  }

}
