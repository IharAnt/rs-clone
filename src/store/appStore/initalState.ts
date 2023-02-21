import { typeAppActual } from "../types/types";
import { IProfile } from "../../types/interfaces/IUser";


const initalState: typeAppActual = {
    activePage: '/',
    isLogin: false,
    activeModalAuth: 'login',
    isLoading: false,
    achievements: [],
    profile: {} as IProfile,
    isLoadingEnd: false
}

export default initalState;
