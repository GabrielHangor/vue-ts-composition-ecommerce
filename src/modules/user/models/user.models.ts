export interface IUserAuthData {
  email: string;
  password: string;
}

export interface IUserMetaData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  zipCode: string | number;
  street: string;
}

export enum AuthProviders {
  Google = 'google',
  Github = 'github',
}
