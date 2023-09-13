import API from "."
import { AxiosResponse } from 'axios'
import { ITrack, IAlbum } from "../models/models"

export default {
  getTracks: async(): Promise<AxiosResponse<ITrack[]>> => {
    return API.get<ITrack[]>('/track/get')
  },
  getAlbums: async(): Promise<AxiosResponse<IAlbum[]>> => {
    return API.get<IAlbum[]>('/album/get')
  }
}