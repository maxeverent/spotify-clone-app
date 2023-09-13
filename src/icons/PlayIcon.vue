<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" viewBox="0 0 18 18" fill="none" cursor="pointer" v-if="isPlaying" @click="pause">
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(29,185,84); fill-rule: nonzero; opacity: 1;" d="M 0 8.72727 C 0 3.907330000000001 3.90733 0 8.72727 0 C 13.54721 0 17.45454 3.90733 17.45454 8.72727 C 17.45454 13.54721 13.547210000000002 17.45454 8.72727 17.45454 C 3.907330000000001 17.45454 0 13.547210000000002 0 8.72727 z M 10.78571 11.81298 L 10.78571 5.64155 L 9.22727 5.64155 L 9.22727 11.81298 z M 8.22727 11.81298 L 8.22727 5.64155 L 6.668830000000001 5.64155 L 6.668830000000001 11.81298 z" stroke-linecap="round"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" viewBox="0 0 18 18" fill="white" cursor="pointer" v-else @click="play">
    <circle cx="8.72727" cy="8.72727" r="8.72727" fill="#1DB954"/>
    <path d="M6.54544 12L12.2727 8.72726L6.54544 5.45453V12Z" fill="white"/>
  </svg>
</template>

<script lang="ts" setup>

import { useStore } from '@/store';
import { computed } from 'vue';

const store = useStore()

const isPlaying = computed(() => {
  return store.getters.isPlaying
})

interface Props {
  size?: number
}

const play = () => {
  const player = document.getElementById('player') as HTMLAudioElement;
  if (player.currentTime) {
    player.play()
    store.commit('play')
  }
}

const pause = () => {
  const player = document.getElementById('player') as HTMLAudioElement;
  if (!player.paused) {
    store.commit('pause')
    player.pause()
  }
}

const props = withDefaults(defineProps<Props>(), {
  size: () => 50
})

</script>