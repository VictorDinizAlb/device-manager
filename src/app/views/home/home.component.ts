import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories?: Category[];

  constructor(
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(resultado => {
      this.categories = resultado;
      this.getCategories();
    });
  }

  testeAdd(){
    console.log("Teste");
    window.location.reload();
  }
}
