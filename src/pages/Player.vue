<template>
  <div class="page" :theme="theme">
    <div class="wrapper">
      <div class="nav">
        <ButtonBack :backgroud-color="buttonBack" :color="buttonBackColor"/>
        <ButtonMenu :color="'white'"/>
      </div>
      <div class="player">
        <img :src="trackCover" alt="" class="player__image">
        <div class="current-track">
          <div class="track-info">
            <div class="track-info__name">{{ currentTrack.name }}</div>
            <div class="track-info__artist">{{ currentTrack.artists[0].name }}</div>
          </div>
          <svg fill="#FF0000" width="32" height="32" cursor="pointer">
            <component :is="HeartIcon"/>
          </svg>
        </div>
        <Progress/>
        <div class="controll">
          <ReplayIcon/>
          <BackwardIcon/>
          <PlayIcon :size="70"/>
          <ForwardIcon/>
          <ShuffleIcon/>
        </div>
        <div class="arrow-up">
          <ArrowUpIcon @click="$router.push({name: 'lirics'})"/>
          <p class="arrow-up__text">Lyric</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import ButtonBack from '@/ui/ButtonBack.vue';
import ButtonMenu from '@/ui/ButtonMenu.vue';

import HeartIcon from '@/icons/HeartIcon.vue';

import ReplayIcon from '@/icons/ReplayIcon.vue';
import BackwardIcon from '@/icons/BackwardIcon.vue';
import PlayIcon from '@/icons/PlayIcon.vue'
import ForwardIcon from '@/icons/ForwardIcon.vue';
import ShuffleIcon from '@/icons/ShuffleIcon.vue';

import ArrowUpIcon from '@/icons/ArrowUpIcon.vue'

import Progress from '@/components/Player/Progress.vue'
import { computed } from 'vue';
import { useStore } from '@/store';

import { API_URL } from '@/http';

const theme = localStorage.getItem('theme')

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

const store = useStore()

const currentTrack = computed(() => {
  const track = store.getters.getCurrentTrack
  if (Object.entries(track).length !== 0) {
    return store.getters.getCurrentTrack
  }
  return {
    artists: [{
      name: ''
    }],
    name: ''
  }
})

const trackCover = computed(() => {
  return `${API_URL}${currentTrack.value.cover}`
})

</script>

<style lang="sass" scoped>

@import '../styles/$theme-colors.sass'

.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  background-color: var(--background-color)

.wrapper
  display: flex
  height: 742px
  flex-direction: column
  position: relative
  padding: 0px 20px

.nav
  display: flex
  width: 283px
  margin: 55px auto 0px auto
  align-items: center
  justify-content: space-between

.player
  margin: 41px 0px
  &__image
    width: 335px
    height: 335px
    border-radius: 40px

.current-track
  display: flex
  margin: 13px 0px
  justify-content: space-between
  align-items: center

.track-info

  &__name
    color: var(--main-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 600
    line-height: normal
  &__artist
    color: var(--text-color)
    font-family: Poppins
    font-size: 14px
    font-style: normal
    font-weight: 500
    line-height: normal

.like
  background-image: url('~@/assets/heart.svg')
  background-position: center
  width: 32px
  height: 32px
  border: none
  border-radius: 100%
  cursor: pointer

.controll
  margin: 35px 0px
  display: flex
  align-items: center
  justify-content: space-around

.arrow-up
  width: 34px
  margin: 0px auto
  &__text
    color: var(--text-color)
    font-family: Poppins
    font-size: 12px
    font-style: normal
    font-weight: 500
    line-height: normal
    text-align: left
    margin: 0px

</style>