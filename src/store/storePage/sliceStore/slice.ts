import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/interfaces/IProduct";
import { typeStorePage } from "../../types/types";
import initalState from "../initalState";

const sliceStorePage = createSlice({
    name: 'store-page',
    initialState: initalState,
    reducers: {
        addProductBasket(state: typeStorePage, action: PayloadAction<IProduct>) {
            // const productItem = state.basketProducts.find((item) => item.product.id === action.payload.id)
            state.basketProducts.push({ product: action.payload, count: 1 });
        },
        deleteProductBasket(state: typeStorePage, action: PayloadAction<string>) {
            state.basketProducts = state.basketProducts.filter((item) => item.product.id !== action.payload);
            console.log(state.basketProducts)
        },

    }
})

export default sliceStorePage.reducer;
export const { addProductBasket, deleteProductBasket } = sliceStorePage.actions;
