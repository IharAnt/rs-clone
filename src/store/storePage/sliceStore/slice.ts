import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/interfaces/IProduct";
import { typeStorePage } from "../../types/types";
import initalState from "../initalState";

const sliceStorePage = createSlice({
    name: 'store-page',
    initialState: initalState,
    reducers: {
        addBasket(state: typeStorePage, action: PayloadAction<IProduct>) {
            const productItem = state.basketProducts.find((item) => item.product.id === action.payload.id)
            if (productItem) {
                productItem.count = +1
            } else {
                console.log('нету')
            }
            console.log(state.basketProducts)
        },

    }
})

export default sliceStorePage.reducer;
export const { addBasket } = sliceStorePage.actions;
