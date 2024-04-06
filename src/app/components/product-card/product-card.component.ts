import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../types/product';
import { RupeePipe } from '../../pipe/rupee.pipe';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RupeePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product!:Product
@Output() viewProduct =new EventEmitter<number>();  

view(){
  console.log("View Product Button Clicked");
  this.viewProduct.emit(this.product.id)
}
}
