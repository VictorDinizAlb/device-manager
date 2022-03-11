import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: CategoryService
  ) {
    this.categoryForm = this.fb.group({})
   }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      devices: [[]]
    })
  }

  createCategory() {
    this.rest.postCategory(this.categoryForm.value).subscribe(() => {
      window.location.reload();
    });
    this.categoryForm.reset();
  }

}
