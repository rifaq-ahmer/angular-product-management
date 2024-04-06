import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products:Product[] = []
  filteredProducts :Product[]=[]
  productService = inject(ProductsService)
  router = inject(Router)
  ngOnInit(): void {
  this.productService.getProducts().subscribe((result) =>{
    console.log("API RESPONSE",result);
    this.products = result 
    this.filteredProducts = this.products
  })
  } 
  onViewProduct(productId:any){ 
    console.log("OnViewProduct Called", productId);
    this.router.navigateByUrl(`/product/${productId}`)
   }
   onSearch(seacrh:string){
     if(seacrh){
      this.filteredProducts = this.products.filter(item => item.name.toLowerCase().includes(seacrh.toLowerCase()))
     }
     else{
      this.filteredProducts = this.products
     }
      
   }
}
 