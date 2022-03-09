export class Category{
  id: number;
  name: string;
  devices: [];

  constructor(id: number, name: string, devices: []) {
    this.id = id;
    this.name = name;
    this.devices = []
  }
}
