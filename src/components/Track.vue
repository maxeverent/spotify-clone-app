<template>
  <div class="track">
    <PlayTrackIcon :theme="theme" @click="play"/>
    <div class="track__info">
      <div class="track__name">{{ props.track.name }}</div>
      <div class="track__artist">{{ props.track.artists[0].name }}</div>
    </div>
    <div class="track__duration">2:32</div>
    <svg fill="#00000080" width="26" height="26" cursor="pointer" class="like">
      <component :is="HeartIcon"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>

import { API_URL } from '@/http';

import { ITrack } from '@/models/models';

import router from '@/router';
import { useStore } from '@/store';

import PlayTrackIcon from '@/icons/PlayTrackIcon.vue';
import HeartIcon from '@/icons/HeartIcon.vue';

const theme = localStorage.getItem('theme')

const store = useStore()

const props = defineProps<{
  track: ITrack
}>()

const play = async () => {
  const trackUrl = `${API_URL}${props.track.url}`
  const player = document.getElementById('player') as HTMLAudioElement;
  player.src = trackUrl
  player.play().then(async() => {
    await store.dispatch('setCurrentTrackDuration', player.duration)
  })
  store.commit('play')
  store.commit('setCurrentTrack', props.track)
  router.push({name: 'player'})
}

</script>

<style lang="sass" scoped>

@import '../styles/$theme-colors.sass'

.track
  display: flex
  align-items: center
  padding: 10px 0px 10px 0px
  &__info
    width: 130px
    margin-left: 10px
  &__name
    color: var(--main-color)
    font-family: Poppins
    font-size: 12px
    font-style: normal
    font-weight: 500
    line-height: normal
  &__artist
    color: var(--text-color)
    font-family: Poppins
    font-size: 10px
    font-style: normal
    font-weight: 500
    line-height: normal
  &__duration
    color: var(--text-color)
    font-family: Poppins
    font-size: 14px
    font-style: normal
    font-weight: 500
    line-height: normal
    margin: 0px 60px 0px 30px


.play
  background-image: url('~@/assets/play.svg')
  background-position: center
  width: 30px
  height: 30px
  border: none
  border-radius: 100%
  cursor: pointer

.like
  margin-top: -7px
  fill: var(--text-color)

</style>