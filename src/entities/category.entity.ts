type CategoryProps = {
  id?: string;
  title: string;
  color: string;
};

export class Category {
  public id?: string;
  public title: string;
  public color: string;

  constructor(data: CategoryProps) {
    this.id = data.id;
    this.title = data.title;
    this.color = data.color.toUpperCase();
  }

  // exemplo usando desestruturação
  //   constructor({id,color,title}: CategoryProps) {
  //     this.id = id;
  //     this.title = title;
  //     this.color = color;
  //   }

  //construct sem o uso de type, é sugerido utilizar o type para diminuir o uso de propriedades.
  // a propriedade de opcional "?" precisa ser o ultimo na cadea de argumentos
  //   constructor(title: string, color: string, id?: string) {
  //     this.id = id;
  //     this.title = title;
  //     this.color = color;
  //   }
}
