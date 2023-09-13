import { Module } from "vuex";
import { IRootState } from ".";
import { IPlaylist } from "@/models/models";

import api from '../http/playlists'

export interface PlaylistState {
  playlists: Array<IPlaylist>
}

const playlists: Module<PlaylistState, IRootState> = {
  state: {
    playlists: [],
  },
  actions: {
    getPlaylists: async({commit}) => {
      return api.getPlaylists().then((response) => {
        commit('getPlaylists', response.data)
      })
    }
  },
  mutations: {
    getPlaylists: (state, playlists: Array<IPlaylist>) => {
      state.playlists = playlists
   }
  },
  getters: {
    getPlaylists: (state) => {
      return state.playlists
    }
  }
}

export default playlists