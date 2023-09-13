import { AuthResponse } from "@/models/auth-models";
import axios from "axios";

export const API_URL = process.env.VUE_APP_API_URL

import router from "@/router";

const API = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

API.interceptors.response.use((config) => {
  return config
}, async (err) => {
  const originalRequest = err.config
  console.log(err)
  if (err.response.data.message == 'Пользователь не авторизован' && err.config && !err.config._isRetry) {
    originalRequest._isRetry = true
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/user/refresh`, {withCredentials: true})
      localStorage.setItem('token', response.data.accessToken)
      return API.request(originalRequest)
    } catch(e) {
      const player = document.getElementById('player') as HTMLAudioElement;
      player.pause()
      localStorage.removeItem('token')
      router.push({name: 'getStarted'})
      console.log('Не авторизован')
    }
  }
  throw err
})

export default API