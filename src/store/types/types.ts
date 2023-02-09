import { store } from "..";

export type typeAppActual = {
    activePage: string,
    isLogin: boolean,
    activeModalAuth: typeActualModalAuth
}

export type typeActualModalAuth = 'register' | 'login' | 'forget';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;