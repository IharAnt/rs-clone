export interface IAuthUser {
  password: string;
  email: string;
  name: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface IProfile extends IUser {
  birthday?: number;
  phone?: string;
  photo?: string;
}
