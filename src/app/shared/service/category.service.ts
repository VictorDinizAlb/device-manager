import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // ========= Api localhost ===========
  // private readonly apiUrl = `${environment.apiLocal}category`

  // ========== Api RDS AWS ===========
  private readonly apiUrl = `${environment.apiRDS}category`

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


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

  public deleteCategory(id: any) {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
