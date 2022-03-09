import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // ========= Api localhost ===========
  apiUrl = 'http://localhost:3000/category';

  // ========== Api RDS AWS ===========
  // apiUrl = 'http://18.231.183.53:3000/category';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCategories(): Observable<Category[]>{
    const categories = this.httpClient.get<Category[]>(this.apiUrl)
    return categories;
  }

  public postCategory(category: Category): Observable<Category>{

    return this.httpClient.post<Category>(this.apiUrl, category, this.httpOptions)
  }

  public deleteCategory(id: any){
    this.httpClient.delete(this.apiUrl + "/delete/".concat(id))
    console.log(this.apiUrl + "/delete/" + id)
    // window.location.reload();
  }
}
