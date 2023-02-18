import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAchievement } from "../../../types/interfaces/IAchievement";
import { IProfile, IUser } from "../../../types/interfaces/IUser";
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
        userChange(state: typeAppActual, action: PayloadAction<IProfile>) {
            state.profile = action.payload;
        },
        loadingChange(state: typeAppActual, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        authChange(state: typeAppActual, action: PayloadAction<typeActualModalAuth>) {
            state.activeModalAuth = action.payload;
        },
        achievementsChange(state: typeAppActual, action: PayloadAction<IAchievement[]>) {
            state.achievements = action.payload;
        },
    }
})

export default sliceChangeApp.reducer;
export const { pageChange, loginChange, authChange, userChange, loadingChange, achievementsChange } = sliceChangeApp.actions;
