import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories?: Category[];

  constructor(
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(resultado => {
      this.categories = resultado;
      this.getCategories();
    });
  }

  deleteCategory(id: number){
    this.categoryService.deleteCategory(id)
  }
}
