import axios from "axios";
import appConfig from "../configs/AppConfig";
import HttpStatusCode from "../types/enums/http/HttpStatusCodes";
import { IAuthResponse } from "../types/interfaces/IAuthResponse";

const apiClient = axios.create({
  withCredentials: true,
  baseURL: appConfig.apiUrl,
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

apiClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === HttpStatusCode.Unauthorized && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      
      try {
        const response = await axios.get<IAuthResponse>(`${appConfig.apiUrl}/refresh`, {
          withCredentials: true,
        });
        
        localStorage.setItem("token", response.data.accessToken);
        return apiClient.request(originalRequest);
      } catch (error) {
        console.log('UnAuthorized');
      }
    }
    throw error;
  }
);

export default apiClient;
