import categories from './data/categories.json';
import products from './data/products.json';

export default class Database {
  constructor() {}

  async getAllCategories(): Promise<TCategory[]> {
    await randomDelay();

    return categories;
  }

  async getCategoryById(id: number): Promise<TCategory | null> {
    await randomDelay();

    return categories.find(category => category.id === id) || null;
  }

  async getAllProducts(): Promise<TProduct[]> {
    await randomDelay();

    return products;
  }

  async getProductById(id: number): Promise<TProduct | null> {
    await randomDelay();

    return products.find(product => product.id === id) || null;
  }
}

const randomDelay = () =>
  new Promise(resolve => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });
