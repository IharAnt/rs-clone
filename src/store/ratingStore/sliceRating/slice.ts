import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import OrderType from "../../../types/enums/OrderEnum";
import RatingSortType from "../../../types/enums/RatingSortEnum";
import { typeRatingPage } from "../../types/types";
import initalState from "../initalState";

const sliceRatingPage = createSlice({
    name: 'rating-page',
    initialState: initalState,
    reducers: {
        pageChangeRating(state: typeRatingPage, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        limitChange(state: typeRatingPage, action: PayloadAction<number>) {
            state.limit = action.payload;
        },
        sortChange(state: typeRatingPage, action: PayloadAction<string>) {
            state.sort = RatingSortType[action.payload as keyof typeof RatingSortType]
        },
        orderChange(state: typeRatingPage, action: PayloadAction<string>) {
            state.order = OrderType[action.payload as keyof typeof OrderType]
        },
    }
})

export default sliceRatingPage.reducer;
export const { limitChange, sortChange, orderChange, pageChangeRating } = sliceRatingPage.actions;
