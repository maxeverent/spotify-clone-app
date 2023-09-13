import { Module } from "vuex";
import { IRootState } from ".";
import { IUser } from "@/models/auth-models";

import router from "@/router";

import api from '../http/auth'

export interface UserState {
  user: IUser
  isAuth: boolean
  rootDispatch?: boolean
}

const auth: Module<UserState, IRootState> = {
  state: {
    user: {} as IUser,
    isAuth: false
  },
  actions: {
    register: async({commit}, user: IUser) => {
      return api.register(user).then((response) => {
        localStorage.setItem('token', response.data.accessToken)
        commit('register', response.data.user)
        commit('setAuth', true)
      })
    },
    login: async({commit}, {login, password}) => {
      return api.login(login, password).then((response) => {
        localStorage.setItem('token', response.data.accessToken)
        commit('login', response.data.user)
        commit('setAuth', true)
      })
    },
    checkAuth: async({commit}) => {
      return api.checkAuth()
        .then((response) => {
          localStorage.setItem('token', response.data.accessToken)
          commit('register', response.data.user)
          commit('setAuth', true)
        })
        .catch((e) => {
          localStorage.removeItem('token')
          commit('setAuth', false)
          router.push({name: 'getStarted'})
        })
    },
    logout: async({commit}) => {
      return api.logout().then((response) => {
        console.log(response)
        localStorage.removeItem('token')
        commit('logout'),
        commit('setAuth', false)
      })
    }
  },
  mutations: {
    setAuth: (state, status: boolean) => {
      state.isAuth = status
    },
    register: (state, user: IUser) => {
      state.user = user
    },
    login: (state, user: IUser) => {
      state.user = user
    },
    logout: (state) => {
      state.user = {} as IUser
    }
  },
  getters: {
    isAuth: (state) => {
      return state.isAuth
    },
    getUser: (state) => {
      return state.user
    }
  }
}

export default auth