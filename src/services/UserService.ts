import { IProfile, IUpdateProfile, IUser } from '../types/interfaces/IUser';
import profile from '../data/Profile';
import apiClient from '../api/ApiClient';
//import users from '../data/Users';

export default class UserService {
  static userPath = `/users`;
  static profilePath = `/profile`;

  static async getProfile(userId: string): Promise<IProfile> {
    const response = await apiClient.get<IProfile>(`${UserService.profilePath}/${userId}`);
    return response.data;

    // return Promise.resolve(profile);
  }

  static async updateProfile(userId: string, updateProfile: IUpdateProfile): Promise<IProfile> {
    const response = await apiClient.put<IProfile>(`${UserService.profilePath}/${userId}`, updateProfile);
    return response.data;

    // return Promise.resolve(Object.assign(profile, updateProfile));
  }

  static async getUsers(): Promise<IUser[]> {
    const response = await apiClient.get<IUser[]>(`${UserService.userPath}`);
    return response.data;

    //return Promise.resolve(users);
  }
}
