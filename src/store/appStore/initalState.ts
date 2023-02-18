import { typeAppActual } from "../types/types";
import { IProfile, IUser } from "../../types/interfaces/IUser";
import { IAchievement } from "../../types/interfaces/IAchievement";


const initalState: typeAppActual = {
    activePage: '/',
    isLogin: false,
    activeModalAuth: 'login',
    isLoading: false,
    achievements: [],
    profile: {} as IProfile,
}

export default initalState;
