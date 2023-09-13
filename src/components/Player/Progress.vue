<template>
  <div class="progress">
    <div class="progress-bar" @click="updateProgress($event)">
      <div class="progress-bar__item">
        <div class="progress-bar__controll"></div>
      </div>
    </div>
    <div class="time">
      <div class="time__current">
        <span>{{ currentTime }}</span>
      </div>
      <div class="time__end">
        <span>{{ duration }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useStore } from '@/store';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const player = document.getElementById('player') as HTMLAudioElement;

let progressBar: HTMLElement
let progress: HTMLElement

const currentTime = ref<string>('00:00')

const store = useStore()

const duration = computed(() => {
  const time = store.getters.getCurrentTrackDuration
  return new Date(time * 1000).toISOString().substring(14, 19)
})

const currentDuration = computed(() => {
  return store.getters.getCurrentTrackDuration
})

player.addEventListener('timeupdate', () => {
  currentTime.value = new Date(player.currentTime * 1000).toISOString().substring(14, 19)
  const progressBarWidth = progressBar.clientWidth
  const progressWidth = (progressBarWidth * player.currentTime)/currentDuration.value
  progress.style.width = progressWidth + 'px'
})

player.addEventListener('ended', () => {
  store.commit('pause')
})

const updateProgress = (e: MouseEvent) => {
  const progressBarWidth = progressBar.clientWidth
  const offsetX = e.offsetX
  progress.style.width = offsetX + 'px'
  const currentTime = offsetX*currentDuration.value/progressBarWidth
  player.currentTime = currentTime
  player.play()
  store.commit('play')
}

onMounted(() => {
  progressBar = document.querySelector('.progress-bar') as HTMLElement
  progress = document.querySelector('.progress-bar__item') as HTMLElement
})

onUnmounted(() => {
  player.removeEventListener
})

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.progress
  padding: 4px 0px

.progress-bar
  width: 335.001px
  height: 2px
  background-color: #C9C9C9
  margin: 6px 0px
  cursor: pointer
  &__item
    width: 0px
    height: 2px
    background-color: #4F4F4F
    position: relative
    pointer-events: none
  &__controll
    width: 6px
    height: 6px
    background-color: #4F4F4F
    border-radius: 100%
    position: absolute
    top: -2px
    right: 0px
    cursor: pointer

.time
  display: flex
  justify-content: space-between
  color: var(--text-color)
  font-family: Poppins
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: normal

</style>