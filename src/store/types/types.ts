import { store } from "..";
import { IProfile, IUser } from "../../types/interfaces/IUser";

export type typeAppActual = {
    activePage: string,
    isLogin: boolean,
    activeModalAuth: typeActualModalAuth,
    isLoading: boolean,
    profile: IProfile,
}

export type typeActualModalAuth = 'register' | 'login' | 'forget';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;