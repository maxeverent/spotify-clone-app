export interface IUser {
  fullname: string,
  email: string,
  username: string,
  password: string,
  cover?: string,
  following?: Array<IUser>
}

export interface AuthResponse {
  accessToken: string,
  refreshToken: string,
  user: IUser
}

export interface AuthError {
  message: string
}