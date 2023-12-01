import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {products} from 'src/app/shared/mocks/products';

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
export class ProductsComponent implements OnInit {

  hoverState = 'out';
  products: any[];
  filteredProducts: any[];
  categories: any;
  selectedCategory: any;
  searchKeyword: any;




  constructor() {
    this.products = products;
    this.filteredProducts = [...this.products];
    this.categories = this.getUniqueCategories();
  }

  ngOnInit() {
  }

  toggleHoverState() {
    this.hoverState = (this.hoverState === 'out' ? 'in' : 'out');
  }
  getUniqueCategories(): string[] {
    return [...new Set(this.products.map((product) => product.category))];
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory =
        !this.selectedCategory || product.category === this.selectedCategory;
      const matchesSearch =
        !this.searchKeyword ||
        product.name.toLowerCase().includes(this.searchKeyword.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

}
