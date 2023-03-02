import { store } from "..";
import { IProfile } from "../../types/interfaces/IUser";
import OrderType from "../../types/enums/OrderEnum";
import RatingSortType from "../../types/enums/RatingSortEnum";
import { IAchievement } from "../../types/interfaces/IAchievement";
import { ICartProduct, IOrder } from "../../types/interfaces/IOrder";

export type typeAppActual = {
    activePage: string,
    isLogin: boolean,
    activeModalAuth: typeActualModalAuth,
    isLoading: boolean,
    achievements: IAchievement[],
    profile: IProfile,
    isLoadingEnd: boolean,
}

export type typeStorePage = {
    basketProducts: ICartProduct[],
    orders: IOrder[],
    basketCount: number,
    IsBasketOpen: boolean,
    IsHistoryOpen: boolean,
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