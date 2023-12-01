import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';
import { FormsModule } from '@angular/forms';
import { SignalService } from 'src/app/shared/services/signal.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers:[SignalService],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
