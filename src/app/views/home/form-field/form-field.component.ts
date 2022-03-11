import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/shared/model/category.model';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})

// Compomente que gera um select para filtrar os Devices por categorias
// Ainda não funciona, logo não está em uso

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

  // Função que desbuga click select
  trackByFn(index: number, item: Category): number {
    return item.id;
  }

  getDevicesById(selectedCategory: string){
    console.log(selectedCategory);
  }

}
