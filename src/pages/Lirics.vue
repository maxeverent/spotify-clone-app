<template>
  <div class="page" :theme="theme">
    <div class="wrapper">
      <div class="nav">
        <ButtonBack :backgroudColor="'#8E8E8E'" :opacity="0.4" :color="'#fff'"/>
        <ButtonMenu :color="'white'"/>
      </div>
      <div class="lirics">
        <h2 class="lirics__title">Verse 1</h2>
        <p class="lirics__text">
          White shirt now red, my bloody nose<br>
          Sleepin', you're on your tippy toes<br>
          Creepin' around like no one knows<br>
          Think you're so criminal<br>
          Bruises on both my knees for you<br>
          Don't say thank you or please<br>
          I do what I want when I'm wanting to<br>
          My soul? So cynical<br>
        </p>
        <h2 class="lirics__title">Verse 1</h2>
        <p class="lirics__text">
          White shirt now red, my bloody nose<br>
          Sleepin', you're on your tippy toes<br>
          Creepin' around like no one knows<br>
          Think you're so criminal<br>
          Bruises on both my knees for you<br>
          Don't say thank you or please<br>
          I do what I want when I'm wanting to<br>
          My soul? So cynical<br>
        </p>
      </div>
      <div class="mini-player">
        <div class="mini-player__info">
          <img class="mini-player__image" :src="trackCover"/>
          <div class="track">
            <h2 class="track__name">{{ currentTrack.name }}</h2>
            <p class="track__artist">{{ currentTrack.artists[0].name }}</p>
          </div>
        </div>
        <Progress/>
        <div class="controll">
          <ReplayIcon/>
          <BackwardIcon/>
          <PlayIcon/>
          <ForwardIcon/>
          <ShuffleIcon/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import ButtonBack from '@/ui/ButtonBack.vue';
import ButtonMenu from '@/ui/ButtonMenu.vue';

import Progress from '@/components/Player/Progress.vue';

import ReplayIcon from '@/icons/ReplayIcon.vue';
import BackwardIcon from '@/icons/BackwardIcon.vue';
import PlayIcon from '@/icons/PlayIcon.vue';
import ForwardIcon from '@/icons/ForwardIcon.vue';
import ShuffleIcon from '@/icons/ShuffleIcon.vue';

import { computed } from 'vue';
import { useStore } from '@/store';

import { API_URL } from '@/http';

const theme = localStorage.getItem('theme')

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
  overflow: hidden

.wrapper
  display: flex
  height: 100%
  flex-direction: column
  position: relative
  padding: 0px 20px
  background-image: url('~@/assets/bg.png')

.nav
  display: flex
  width: 283px
  margin: 55px auto 0px auto
  align-items: center
  justify-content: space-between

.lirics
  overflow: hidden
  &__title
    color: #FFF
    font-family: Poppins
    font-size: 13px
    font-style: normal
    font-weight: 600
    line-height: normal
    margin: 25px 0px 9px 0px
  &__text
    color: rgba(255, 255, 255, 0.50)
    font-family: Poppins
    font-size: 15px
    font-style: normal
    font-weight: 400
    line-height: 36px
    padding: 0px 29px
.mini-player
  &__info
    display: flex
  &__image
    width: 38px
    height: 38px
    border-radius: 38px


  box-sizing: border-box
  margin-left: -20px
  width: 375px
  height: 162px
  background-color: var(--background-color)
  margin-top: auto
  padding: 11px 20px 23px 20px

.track
  margin: 0px 12px
  &__name
    color: var(--main-color)
    font-family: Poppins
    font-size: 14px
    font-style: normal
    font-weight: 600
    line-height: normal
    margin: 0px
  &__artist
    color: var(--text-color)
    font-family: Poppins
    font-size: 12px
    font-style: normal
    font-weight: 400
    line-height: normal
    margin: 0px

.controll
  display: flex
  align-items: center
  justify-content: space-around

</style>