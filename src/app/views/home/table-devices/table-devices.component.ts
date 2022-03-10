import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/shared/model/device.model';
import { DeviceService } from 'src/app/shared/service/device.service';

@Component({
  selector: 'app-table-devices',
  templateUrl: './table-devices.component.html',
  styleUrls: ['./table-devices.component.css']
})

export class TableDevicesComponent implements OnInit {

  devices?: Device[];

  constructor(
    public deviceService: DeviceService
  ) { }

  ngOnInit(): void {

    this.getDevices()
  }

  displayedColumns: string[] = ['id', 'color', 'partNumber', 'category'];

  getDevices(){
    this.deviceService.getDevices().subscribe(resultado => {
      this.devices = resultado;
      console.log(this.devices);
    })
  }

}
