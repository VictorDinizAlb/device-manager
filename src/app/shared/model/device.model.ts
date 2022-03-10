import { Category } from "./category.model";

export class Device{
  id: number;
  color: string;
  partNumber: number;
  category: Category;

  constructor(id: number, color: string, partNumber: number, category: Category) {
    this.id = id;
    this.color = color;
    this.partNumber = partNumber;
    this.category = category
  }
}
