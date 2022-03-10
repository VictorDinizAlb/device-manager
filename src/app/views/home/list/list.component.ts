import { Component, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() categories?: Category[];

  constructor(
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {

  }

  deleteCategory(id: number){
    this.categoryService.deleteCategory(id).subscribe();
    console.log("Chegou ", id)
   }

  trackByFn(index: number, item: Category): number {
    return item.id;
  }

}
