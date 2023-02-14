import { IProduct } from "./IProduct";

export interface IOrder extends ICartProduct {
  id: string;
  userId: string;
}

export interface ICartProduct {
  product: IProduct
  count: number;
}