import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../../types/interfaces/IOrder";
import { IProduct } from "../../../types/interfaces/IProduct";
import { typeStorePage } from "../../types/types";
import initalState from "../initalState";

const sliceStorePage = createSlice({
    name: 'store-page',
    initialState: initalState,
    reducers: {
        openBasketWindow(state: typeStorePage, action: PayloadAction<''>) {
            state.IsBasketOpen ? state.IsBasketOpen = false : state.IsBasketOpen = true;
        },
        openHistoryWindow(state: typeStorePage, action: PayloadAction<''>) {
            state.IsHistoryOpen ? state.IsHistoryOpen = false : state.IsHistoryOpen = true;
        },
        addProductBasket(state: typeStorePage, action: PayloadAction<IProduct>) {
            if (state.basketProducts.length === 0) {
                state.basketProducts.push({ product: action.payload, count: 1 });
            } else {
                const product = state.basketProducts.find((item) => item.product.id === action.payload.id);
                if (product) {
                    product.count += 1;
                } else {
                    state.basketProducts.push({ product: action.payload, count: 1 });
                }
            }
            state.basketCount = state.basketProducts.reduce((a, b) => a + b.count, 0);
        },
        deleteProductBasket(state: typeStorePage, action: PayloadAction<string>) {
            state.basketProducts = state.basketProducts.filter((item) => item.product.id !== action.payload);
            state.basketCount = state.basketProducts.reduce((a, b) => a + b.count, 0);
        },
        plusProductBasket(state: typeStorePage, action: PayloadAction<string>) {
            state.basketProducts = state.basketProducts.map((item) => {
                if (item.product.id === action.payload) {
                    item.count += 1;
                }
                return item;
            });
            state.basketCount = state.basketProducts.reduce((a, b) => a + b.count, 0);
        },
        minusProductBasket(state: typeStorePage, action: PayloadAction<string>) {
            state.basketProducts = state.basketProducts.map((item) => {
                if (item.product.id === action.payload) {
                    item.count -= 1;
                    if (item.count < 1) {
                        item.count = 0;
                    }
                }
                return item;
            });
            state.basketProducts = state.basketProducts.filter((item) => item.count > 0);
            state.basketCount = state.basketProducts.reduce((a, b) => a + b.count, 0);
        },
        refresBasket(state: typeStorePage, action: PayloadAction<''>) {
            state.basketProducts.map((item) => item.count = 0);
            state.basketProducts = state.basketProducts.filter((item) => item.count > 0);
            state.basketCount = state.basketProducts.reduce((a, b) => a + b.count, 0);
        },
        refreshOrders(state: typeStorePage, action: PayloadAction<IOrder[]>) {
          state.orders = action.payload;
        }
    }
})

export default sliceStorePage.reducer;
export const { refresBasket, addProductBasket, deleteProductBasket, plusProductBasket, minusProductBasket, openHistoryWindow, openBasketWindow, refreshOrders } = sliceStorePage.actions;
