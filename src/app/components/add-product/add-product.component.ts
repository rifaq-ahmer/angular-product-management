import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
product:Product={
  name:"",
  brand:"",
  imageUrl:"",
  price:0,
  actualPrice:0,
  discount:0
}
productService =inject(ProductsService)
router=inject(Router)
toasterService = inject(ToastrService)
addProduct(){
  this.productService.addProduct(this.product).subscribe(result =>{
    this.toasterService.success("Your new product added successfully...😄")
    this.router.navigateByUrl("/")
  })
   
}
}
