import { store } from "..";
import OrderType from "../../types/enums/OrderEnum";
import RatingSortType from "../../types/enums/RatingSortEnum";

export type typeAppActual = {
    activePage: string,
    isLogin: boolean,
    activeModalAuth: typeActualModalAuth
}

export type typeRatingPage = {
    page: number,
    limit: number,
    search: string,
    sort: RatingSortType,
    order: OrderType
}

export type typeActualModalAuth = 'register' | 'login' | 'forget';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;