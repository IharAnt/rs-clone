import axios from 'axios';
import { AxiosResponse } from 'axios';
import { IAuthResponse } from "../types/interfaces/IAuthResponse";
import appConfig from "../configs/AppConfig";
import apiClient from '../api/ApiClient';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    const response = await apiClient.post<IAuthResponse>('/login', { email, password });
    localStorage.setItem('token', response.data.accessToken);
    return response;
  }

  static async registration(email: string, password: string, name: string): Promise<AxiosResponse<IAuthResponse>> {
    const response = await apiClient.post<IAuthResponse>('/registration', { email, password, name });
    localStorage.setItem('token', response.data.accessToken);
    return response;
  }

  static async logout(): Promise<void> {
    apiClient.post<IAuthResponse>('/logout');
    localStorage.removeItem('token')
  }

  static async refresh(): Promise<AxiosResponse<IAuthResponse>> {
    const response = await axios.get<IAuthResponse>(`${appConfig.apiUrl}/refresh`, {withCredentials: true});
    localStorage.setItem('token', response.data.accessToken);
    return response;
  }
}