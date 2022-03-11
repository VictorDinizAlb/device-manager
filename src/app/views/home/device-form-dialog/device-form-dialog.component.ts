import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/shared/model/category.model';
import { DeviceService } from 'src/app/shared/service/device.service';

@Component({
  selector: 'app-device-form-dialog',
  templateUrl: './device-form-dialog.component.html',
  styleUrls: ['./device-form-dialog.component.css']
})
export class DeviceFormDialogComponent implements OnInit {

  public selectedCategory: Number = 0;
  public deviceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: DeviceService,
    public dialogRef: MatDialogRef<DeviceFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public categories: Category[],
  ) {
    this.deviceForm = this.fb.group({})
   }

  ngOnInit(): void {
    this.deviceForm = this.fb.group({
      color: ['', [Validators.required]],
      partNumber: ['', [Validators.required]],
      categoryId: ['', [Validators.required]]
    })
  }

  createDevice() {
    console.log(this.deviceForm?.value);
    this.rest.postDevice(this.deviceForm.value).subscribe(() =>{
      this.deviceForm.reset();
      this.dialogRef.close();
      window.location.reload();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  trackByFn(index: number, item: Category): number {
    return item.id;
  }

}
