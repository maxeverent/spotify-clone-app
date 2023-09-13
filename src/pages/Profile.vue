<template>
  <div class="wrapper">
    <div class="profile">
      <div class="nav">
        <ButtonBack :backgroudColor="buttonBack" :color="buttonBackColor"/>
        <ButtonMenu :color="buttonMenuColor"/>
      </div>
      <div class="profile__info">
        <div class="main-info">
          <img class="profile__photo" :src="profilePhoto" alt="">
          <div class="profile__mail">{{ user.email }}</div>
          <div class="profile__username">{{ user.username }}</div>
        </div>
        <div class="follows">
          <div class="follows__item">
            <p class="follows__item-number">
              777
            </p>
            <p class="follows__item-text">Followers</p>
          </div>
          <div class="follows__item">
            <p class="follows__item-number">
              {{ following }}
            </p>
            <p class="follows__item-text">Following</p>
          </div>
        </div>
      </div>
    </div>
    <PublicPlaylists :playlists="playlists"/>
  </div>
</template>

<script lang="ts" setup>

import PublicPlaylists from '@/components/PublicPlaylists/PublicPlaylists.vue'

import ButtonBack from '@/ui/ButtonBack.vue';
import ButtonMenu from '@/ui/ButtonMenu.vue'

import { computed, onMounted } from 'vue';
import { useStore } from '@/store';
import { IUser } from '@/models/auth-models';
import { IPlaylist } from '@/models/models';

import { API_URL } from '@/http';

const store = useStore()

const theme = localStorage.getItem('theme')

const buttonMenuColor = computed(() => {
  if (theme == 'light') {
    return 'black'
  } else {
    return 'white'
  }
})

const buttonBack = computed(() => {
  if (theme == 'light') {
    return '#F0EFEF'
  } else {
    return '#232222'
  }
})

const buttonBackColor = computed(() => {
  if (theme == 'light') {
    return '#232323'
  } else {
    return '#FFF'
  }
})

onMounted(async() => {
  await store.dispatch('getPlaylists').catch((e) => console.log(e.response?.data?.message))
})

const playlists = computed<IPlaylist[]>(() => {
  return store.getters.getPlaylists
})

const user = computed<IUser>(() => {
  return store.getters.getUser
})

const profilePhoto = computed(() => {
  return `${API_URL}${user.value.cover}`
})

const following = computed<number>(() => {
  if (user.value.following) {
    return user.value.following.length
  } else {
    return 0
  }
})

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.wrapper
  display: flex
  height: 742px
  flex-direction: column

.profile
  width: 375px
  height: 349px
  border-radius: 40px 40px 95px 95px
  background: var(--background-color)
  box-shadow: 0px 14px 29px 0px var(--profile-shadow-color)
  &__info
    margin: 19px auto
    width: 226px
  &__photo
    width: 75px
    height: 75px
    border-radius: 75px
    margin: 10px auto
    display: block
  &__mail
    color: var(--text-color)
    font-family: Poppins
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal
    text-align: center
  &__username
    color: var(--text-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 600
    line-height: normal
    text-align: center

.follows
  display: flex
  margin: 12px auto
  justify-content: space-between

  &__item-number
    color: var(--main-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 600
    line-height: normal
    text-align: center
    margin: 0
  &__item-text
    color: var(--text-color)
    font-family: Poppins
    font-size: 11px
    font-style: normal
    font-weight: 400
    line-height: normal
    margin: 0

.nav
  display: flex
  margin: 55px auto 0px auto
  align-items: center
  justify-content: space-between
  padding: 0px 54px 0px 42px

</style>