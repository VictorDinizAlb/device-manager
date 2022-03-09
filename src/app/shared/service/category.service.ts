import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // ========= Api localhost ===========
  // apiUrl = 'http://localhost:3000/category';

  // ========== Api RDS AWS ===========
  apiUrl = 'http://18.231.183.53:3000/category';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCategories(): Observable<any>{
    const categories = this.httpClient.get(this.apiUrl)
    // console.log("Resultado: ", categories, "+++++++++++Teste");
    return categories;
  }
}
