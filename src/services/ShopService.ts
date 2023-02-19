import apiClient from "../api/ApiClient";
import orders from "../data/Orders";
import products from "../data/Products";
import { ICartProduct, IOrder } from "../types/interfaces/IOrder";
import { IProduct } from "../types/interfaces/IProduct";

export default class ShopService {
  static shopPath = `/shop`;
  static async getProducts(): Promise<IProduct[]> {
    const response = await apiClient.get<IProduct[]>(`${ShopService.shopPath}/products`);
    return response.data;
    
    // return Promise.resolve(products);
  }

  static async getOrders(userId: string):  Promise<IOrder[]> {
    const response = await apiClient.get<IOrder[]>(`${ShopService.shopPath}/orders/${userId}`);
    return response.data;
    
    // return Promise.resolve(orders);
  }

  static async addOrders(userId: string, cartProducts: ICartProduct[]):  Promise<IOrder[]> {
    const response = await apiClient.post<IOrder[]>(`${ShopService.shopPath}/addtOrders/${userId}`, cartProducts);
    return response.data;

    // const newOrders = cartProducts.map((prod, index) => ({id: 'asdfa' + index, userId, product: prod.product, count: prod.count}))
    // orders.push(...newOrders);
    // return Promise.resolve(orders);
  }
}