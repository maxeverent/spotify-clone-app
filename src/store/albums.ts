import { Module } from "vuex";
import { IRootState } from ".";
import { IAlbum } from "@/models/models";

import api from '../http/tracks'

export interface TrackState {
  albums: Array<IAlbum>
}

const albums: Module<TrackState, IRootState> = {
  state: {
    albums: [],
  },
  actions: {
    getAlbums: async({commit}) => {
      return api.getAlbums().then((response) => {
        commit('getAlbums', response.data)
      })
    }
  },
  mutations: {
    getAlbums: (state, albums: Array<IAlbum>) => {
      state.albums = albums
   }
  },
  getters: {
    getAlbums: (state) => {
      return state.albums
    }
  }
}

export default albums