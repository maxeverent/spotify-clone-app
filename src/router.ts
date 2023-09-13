import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Ref, ref } from 'vue'

import GetStarted from './pages/GetStarted.vue'
import ChooseTheme from './pages/ChooseTheme.vue'
import Login from './pages/Login.vue'
import SignIn from './pages/SignIn.vue'
import Register from './pages/Register.vue'
import Favorite from './pages/Favorite.vue'
import MainLayout from './pages/MainLayout.vue'

import Main from './pages/Main.vue'
import Profile from './pages/Profile.vue'

import News from './components/News/News.vue'

import Player from './pages/Player.vue'
import Lirics from './pages/Lirics.vue'

const isAuth = ():boolean => {
  if (localStorage.getItem('token')) {
    return true
  } else {
    return false
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'getStarted',
    component: GetStarted,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next({path: '/app/main'})
      } else {
        next()
      }
    }
  },
  {
    path: '/theme',
    name: 'chooseTheme',
    component: ChooseTheme,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next({path: '/app/main'})
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next({path: '/app/main'})
      } else {
        next()
      }
    }
  },
  {
    path: '/signin',
    name: 'signIn',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next({path: '/app/main'})
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next({path: '/app/main'})
      } else {
        next()
      }
    }
  },
  {
    path: '/app',
    name: 'app',
    component: MainLayout,
    children: [
      {
        path: 'main',
        name: 'main',
        component: Main,
        children: [
          {
            path: '',
            name: 'news',
            component: News
          }
        ],
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: Favorite
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!isAuth()) {
        next({name: 'getStarted'})
      } else {
        next()
      }
    }
  },
  {
    path: '/player',
    name: 'player',
    component: Player
  },
  {
    path: '/lirics',
    name: 'lirics',
    component: Lirics
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router