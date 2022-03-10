import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Device } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  // ========= Api localhost ===========
  // private readonly apiUrl = `${environment.apiLocal}device`

  // ========== Api RDS AWS ===========
  private readonly apiUrl = `${environment.apiRDS}device`

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

  constructor(
    private httpClient: HttpClient
  ) { }

  public getDevices(): Observable<Device[]>{
    const devices = this.httpClient.get<Device[]>(this.apiUrl)
    return devices;
  }

  public postDevice(device: Device): Observable<Device>{

    return this.httpClient.post<Device>(this.apiUrl, device, this.httpOptions)
  }

  public deleteDevice(id: any) {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
