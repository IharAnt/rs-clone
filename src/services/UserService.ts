import WebRequest from '../helpers/WebRequest';
import appConfig from '../configs/AppConfig';
import { IProfile } from '../types/interfaces/IUser';
import profile from '../data/Profile';

export default class UserService {
  private webRequest: WebRequest;

  private userPath = `${appConfig.apiUrl}/user`;

  constructor(webRequest: WebRequest = new WebRequest()) {
    this.webRequest = webRequest;
  }

  async getProfile(id: string): Promise<IProfile> {
    // const result = await this.webRequest.get<IProfile>(`${this.userPath}/${id}`);
    // return result;

    return Promise.resolve(profile);
  }
}
