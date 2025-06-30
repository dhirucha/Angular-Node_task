import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  productForm: FormGroup;
  files: File[] = [];
  isEdit = false;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      sku: ['', Validators.required],
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      images: [null]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.productId = +params['id'];
        this.loadProduct(this.productId);
      }
    });
  }

  loadProduct(id: number) {
    this.productService.getById(id).subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  onFileChange(event: any) {
    this.files = Array.from(event.target.files);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('sku', this.productForm.value.sku);
    formData.append('name', this.productForm.value.name);
    formData.append('price', this.productForm.value.price);
    this.files.forEach(file => formData.append('images', file));

    if (this.isEdit) {
      this.productService.update(this.productId, formData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.create(formData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
