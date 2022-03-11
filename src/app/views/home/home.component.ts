import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { DeviceFormDialogComponent } from './device-form-dialog/device-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];

  constructor(
    public categoryService: CategoryService,
    public dialog: MatDialog
  ) {
    this.categories = this.getCategories()
   }

  ngOnInit(): void {

  }

  getCategories() {
    this.categoryService.getCategories().subscribe(resultado => {
      this.categories = resultado;
    });
    return this.categories;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeviceFormDialogComponent, {
      data: this.categories,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
