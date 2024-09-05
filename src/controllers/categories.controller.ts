import type { Request, Response } from 'express';
import { CategoriesSerice } from './../services/categories.service';

export class CategoriesController {
  async create(request: Request, res: Response) {
    type Category = {
      title: string;
      color: string;
    };

    const { title, color } = request.body;

    const category: Category = {
      title,
      color,
    };

    const service = new CategoriesSerice();

    const result = await service.create(category); //await por que o metodo create em services é uma Promise<>

    return res.status(201).json(result);
  }
  // async create(_: Request, res: Response) {
  //   const service = new CategoriesSerice();

  //   const result = await service.create(); //await por que o metodo create em services é uma Promise<>

  //   return res.status(201).json(result);
  // }
}
