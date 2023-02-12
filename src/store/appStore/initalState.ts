import { typeAppActual } from "../types/types";
import { IProfile, IUser } from "../../types/interfaces/IUser";


const initalState: typeAppActual = {
    activePage: '/',
    isLogin: false,
    activeModalAuth: 'login',
    isLoading: false,
    profile: {} as IProfile,
}

export default initalState;
