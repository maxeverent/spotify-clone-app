<template>
  <div class="group-tracks">
    <TrackIcon v-for="(track, i) in props.playlist.tracks?.slice(0, 3)" :key="i" :track="track"/>
  </div>
</template>

<script lang="ts" setup>

import TrackIcon from './TrackIcon.vue'

import { IPlaylist } from '@/models/models';

const props = defineProps<{
  playlist: IPlaylist
}>()

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.group-tracks
  padding: 13px
  box-sizing: border-box
  width: 160px
  height: 160px
  border-radius: 40px
  background: var(--background-color)
  box-shadow: 0px 0px 18px 0px var(--profile-shadow-color)
  display: grid
  gap: 10px
  grid-template-rows: 62px 62px
  grid-template-columns: 62px 62px

</style>