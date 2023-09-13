import API from "."

import { AxiosResponse } from 'axios'
import axios from "axios";
import { IUser, AuthResponse} from "../models/auth-models"

import { API_URL } from "."

export default {
  register: async(data: IUser): Promise<AxiosResponse<AuthResponse>> => {
    return API.post<AuthResponse>('/user/reg', data)
  },

  login: async(login: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return API.post<AuthResponse>('/user/login', {login, password})
  },

  logout: async(): Promise<void> => {
    return API.post('/user/logout')
  },

  checkAuth: async(): Promise<AxiosResponse<AuthResponse>> => {
    return await axios.get<AuthResponse>(`${API_URL}/user/refresh`, { withCredentials: true })
  }
}