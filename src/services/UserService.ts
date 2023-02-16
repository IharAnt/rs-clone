import { IProfile, IUpdateProfile, IUser } from '../types/interfaces/IUser';
import profile from '../data/Profile';
import apiClient from '../api/ApiClient';
//import users from '../data/Users';

export default class UserService {
  static userPath = `/user`;

  static async getProfile(id: string): Promise<IProfile> {
    // const result = await this.webRequest.get<IProfile>(`${this.userPath}/${id}`);
    // return result;

    return Promise.resolve(profile);
  }

  static async updateProfile(id: string, updateProfile: IUpdateProfile): Promise<IProfile> {
    // const result = await this.webRequest.get<IProfile>(`${this.userPath}/${id}`);
    // return result;

    return Promise.resolve(Object.assign(profile, updateProfile));
  }

  static async getUsers(): Promise<IUser[]> {
    const response = await apiClient.get<IUser[]>(`${this.userPath}`);
    return response.data;

    //return Promise.resolve(users);
  }
}
