<template>
  <div class="public-playlists">
    <div class="public-playlists__title">Public Playlist</div>
    <div class="playlists">
      <Playlist v-for="(playlist, i) in props.playlists" :key="i" :playlist="playlist"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import Playlist from './Playlist.vue';

import { IPlaylist } from '@/models/models';

interface Props {
  playlists: IPlaylist[]
}

const props = defineProps<Props>()

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.public-playlists
  position: relative
  padding: 20px 20px 0px 20px
  overflow: hidden
  &__title
    margin: 15px
    color: var(--main-color)
    font-family: Poppins
    font-size: 16px
    font-style: normal
    font-weight: 600
    line-height: normal

.playlists
  display: grid
  gap: 16px
  grid-template-rows: 160px 160px
  grid-template-columns: 160px 160px

</style>