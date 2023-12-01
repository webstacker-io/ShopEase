import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsComponent } from './products.component';
import { SignalService } from 'src/app/shared/services/signal.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductsComponent],
      providers: [SignalService]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should execute toggleHoverState`, () => {
    component.hoverState = 'in';
    component.toggleHoverState();
    expect(component.hoverState).toEqual('in');
    component.hoverState = 'out';
    component.toggleHoverState();
    expect(component.hoverState).toEqual('out');
  });
  it(`should execute filterProducts`, () => {
    component.filterProducts();
    expect(component.filteredProducts).toEqual(component['signal'].products());

  });
});
