import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/shared/model/device.model';
import { DeviceService } from 'src/app/shared/service/device.service';

@Component({
  selector: 'app-table-devices',
  templateUrl: './table-devices.component.html',
  styleUrls: ['./table-devices.component.css']
})

export class TableDevicesComponent implements OnInit {

  devices: Observable<Device[]>;
  displayedColumns: string[] = ['color', 'partNumber', 'category', 'id'];

  constructor(
    public deviceService: DeviceService
  ) {
    this.devices = this.deviceService.getDevices();
  }

  ngOnInit(): void {

  }

  remove(id: number) {
    console.log("delete: ", id)
    this.deviceService.deleteDevice(id).subscribe()
  }


}
