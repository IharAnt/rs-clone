import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/interfaces/IProduct";
import { typeStorePage } from "../../types/types";
import initalState from "../initalState";

const sliceStorePage = createSlice({
    name: 'store-page',
    initialState: initalState,
    reducers: {
        addProductBasket(state: typeStorePage, action: PayloadAction<IProduct>) {
            state.basketProducts.push({ product: action.payload, count: 1 });
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

    }
})

export default sliceStorePage.reducer;
export const { addProductBasket, deleteProductBasket, plusProductBasket, minusProductBasket } = sliceStorePage.actions;
