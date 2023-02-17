import { IOrder } from "../types/interfaces/IOrder";
import products from "./Products";

const orders: IOrder[] = [{
  id: 'sadfasdf',
  userId: 'sdf5sd4af6sd54f',
  product: products[0],
  count: 2,
},
{
  id: 'dsdf',
  userId: 'sdf5sd4af6sd54f',
  product: products[2],
  count: 3,
},
{
  id: 'fghgh',
  userId: 'sdf5sd4af6sd54f',
  product: products[1],
  count: 1,
},
{
  id: 'hjlk',
  userId: 'sdf5sd4af6sd54f',
  product: products[3],
  count: 5,
}];

export default orders;