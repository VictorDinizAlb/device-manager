import { Category } from "./category.model";

export class ResponsePageable{
  categories: Category[];

  constructor(categories: Category[]){
    this.categories = categories
  }
}


