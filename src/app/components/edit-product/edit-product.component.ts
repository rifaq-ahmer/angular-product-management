import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../types/product';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder)
  productService=inject(ProductsService)
  activatedRoute = inject(ActivatedRoute)
  toasterService = inject(ToastrService)

  productForm:FormGroup=this.formBuilder.group({
    id:[""],
    name:["",[Validators.required,Validators.minLength(7)]],
    brand:["",Validators.required],
    imageUrl:[""],
    price:[""],
    actualPrice:[""],
    discount:[""], 
  })
  router=inject(Router)
  ngOnInit()  {
    let productId = this.activatedRoute.snapshot.params["id"];   
    this.productService.getProductById(productId).subscribe((result:Product) => {
      this.productForm.patchValue(result)
    })
  }
  editProduct(){
  if(this.productForm.invalid){
    this.toasterService.error("Please fill the correct value")
    return
  }
    this.productService.updateProduct(this.productForm.value).subscribe(result =>{
      this.toasterService.success("Your product updated successfully...😄")
        this.router.navigateByUrl("/")
      })
  }
}
