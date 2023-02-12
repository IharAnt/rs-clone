import appConfig from '../configs/AppConfig';
import { IProfile, IUser } from '../types/interfaces/IUser';
import profile from '../data/Profile';
// import apiClient from '../api/ApiClient';
import users from '../data/Users';

export default class UserService {
  private userPath = `${appConfig.apiUrl}/user`;

  static async getProfile(id: string): Promise<IProfile> {
    // const result = await this.webRequest.get<IProfile>(`${this.userPath}/${id}`);
    // return result;

    return Promise.resolve(profile);
  }

  static async getUsers(): Promise<IUser[]> {
    // const response = await apiClient.get<IUser[]>('/users');
    // return response.data;

    return Promise.resolve(users);
  }
}
