import orders from "../data/Orders";
import products from "../data/Products";
import { ICartProduct, IOrder } from "../types/interfaces/IOrder";
import { IProduct } from "../types/interfaces/IProduct";

export default class ShopService {
  static async getProducts(): Promise<IProduct[]> {
    return Promise.resolve(products);
  }

  static getOrders(userId: string):  Promise<IOrder[]> {
    return Promise.resolve(orders);
  }

  static addOrders(userId: string, cartProducts: ICartProduct[]):  Promise<IOrder[]> {
    const newOrders = cartProducts.map((prod, index) => ({id: 'asdfa' + index, userId, product: prod.product, count: prod.count}))
    orders.push(...newOrders);
    return Promise.resolve(orders);
  }
}