import { Module } from "vuex";
import { IRootState } from ".";
import { ITrack } from "@/models/models";

import api from '../http/tracks'

export interface TrackState {
  tracks: Array<ITrack>
  currentTrack: ITrack,
  isPlaying: boolean,
  currentTrackDuration: number | null
}

const tracks: Module<TrackState, IRootState> = {
  state: {
    tracks: [],
    currentTrack: {} as ITrack,
    isPlaying: false,
    currentTrackDuration: null
  },
  actions: {
    getTracks: async({commit}) => {
      return api.getTracks().then((response) => {
        commit('getTracks', response.data)
      }).catch((e) => {console.log(e)})
    },
    setCurrentTrackDuration: ({commit}, duration: number) => {
      commit('setCurrentTrackDuration', duration)
    },
  },
  mutations: {
    getTracks: (state, tracks: Array<ITrack>) => {
      state.tracks = tracks
    },
    setCurrentTrack: (state, currentTrack: ITrack) => {
      state.currentTrack = currentTrack
    },
    setCurrentTrackDuration: (state, duration: number) => {
      state.currentTrackDuration = duration
    },
    play: (state) => {
      state.isPlaying = true
    },
    pause: (state) => {
      state.isPlaying = false
    }
  },
  getters: {
    getTracks: (state) => {
      return state.tracks
    },
    getCurrentTrack: (state) => {
      return state.currentTrack
    },
    isPlaying: (state) => {
      return state.isPlaying
    },
    getCurrentTrackDuration: (state) => {
      return state.currentTrackDuration
    }
  }
}

export default tracks