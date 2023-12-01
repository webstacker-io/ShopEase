import { Injectable, computed, signal } from '@angular/core';
import { products } from 'src/app/shared/mocks/products';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  products = signal(products);
  selectedCategory = signal('');
  searchKeyword = signal('');
  filteredProducts = signal(products)
  categories = computed(() => [...new Set(this.products().map((product) => product.category))]);
  hoverState = signal('out');
  constructor() { }

  filterByCategoryAndKeyword() {
    this.filteredProducts.update((value) => this.products().filter((product) => {
      const matchesCategory =
        !this.selectedCategory() || product.category === this.selectedCategory();
      const matchesSearch =
        !this.searchKeyword() ||
        product.name.toLowerCase().includes(this.searchKeyword().toLowerCase());

      return matchesCategory && matchesSearch;
    }));
  }




}
