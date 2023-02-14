import { store } from "..";
import { IProfile, IUser } from "../../types/interfaces/IUser";
import OrderType from "../../types/enums/OrderEnum";
import RatingSortType from "../../types/enums/RatingSortEnum";
import { ICartProduct } from "../../types/interfaces/IOrder";

export type typeAppActual = {
    activePage: string,
    isLogin: boolean,
    activeModalAuth: typeActualModalAuth,
    isLoading: boolean,
    profile: IProfile,
}

export type typeStorePage = {
    basketProducts: ICartProduct[],
}

export type typeRatingPage = {
    page: number,
    limit: number,
    search: string,
    sort: RatingSortType,
    order: OrderType,
}

export type typeActualModalAuth = 'register' | 'login' | 'forget';
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;