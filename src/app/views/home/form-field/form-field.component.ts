import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/shared/model/category.model';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  @Input() categories?: Category[];
  contactForm?: FormGroup;
  selectedCategory: string = '';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      category: [null]
    })
  }


  trackByFn(index: number, item: Category): number {
    return item.id;
  }

  getDevicesById(selectedCategory: string){
    console.log(selectedCategory);
  }

}
