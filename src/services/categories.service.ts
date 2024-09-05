import { Category } from '../entities/category.entity';

export class CategoriesSerice {
  async create(newCategory: Category): Promise<Category> {
    const category = new Category(newCategory);

    return category;
  }

  //   async create(title: string, color: string): Promise<Category> {
  //     const category = new Category({
  //       title: title,
  //       color: color,
  //     });
  //     return category;
  //   }
  //   async create(): Promise<Category> {
  //     const category = new Category({
  //       title: 'Example Category',
  //       color: '#ff33bb',
  //     });
  //     return category;
  //   }
}

//Promise é uma promessa, estou prometendo que vou fazer algo
