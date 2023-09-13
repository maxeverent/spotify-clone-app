import API from "."
import { AxiosResponse } from 'axios'
import { PlaylistResponse } from "../models/models"

export default {
  getPlaylists: async(): Promise<AxiosResponse<PlaylistResponse>> => {
    return API.get<PlaylistResponse>('/playlist/get')
  }
}