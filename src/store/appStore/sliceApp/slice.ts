import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeActualModalAuth, typeAppActual } from "../../types/types";
import initalState from "../initalState";

const sliceChangeApp = createSlice({
    name: 'change_app',
    initialState: initalState,
    reducers: {
        pageChange(state: typeAppActual, action: PayloadAction<string>) {
            state.activePage = action.payload;
        },
        loginChange(state: typeAppActual, action: PayloadAction<boolean>) {
            state.isLogin = action.payload;
        },
        authChange(state: typeAppActual, action: PayloadAction<typeActualModalAuth>) {
            state.activeModalAuth = action.payload;
        },
    }
})

export default sliceChangeApp.reducer;
export const { pageChange, loginChange, authChange } = sliceChangeApp.actions;
