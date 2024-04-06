import { Component, inject } from '@angular/core';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink,UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!:Product
  productService=inject(ProductsService)
  activatedRoute = inject(ActivatedRoute)
  ngOnInit()  {
    let productId = this.activatedRoute.snapshot.params["id"];   
    this.productService.getProductById(productId).subscribe((result:Product) => {
      this.product = result
    })
  }
}
