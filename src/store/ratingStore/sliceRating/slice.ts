import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeRatingPage } from "../../types/types";
import initalState from "../initalState";

const sliceRatingPage = createSlice({
    name: 'rating-page',
    initialState: initalState,
    reducers: {
        limitChange(state: typeRatingPage, action: PayloadAction<number>) {
            state.limit = action.payload;
        },
    }
})

export default sliceRatingPage.reducer;
export const { limitChange } = sliceRatingPage.actions;
