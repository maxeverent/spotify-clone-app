<template>
  <div class="album">
    <img class="album__image" :src="albumCover" alt="">
    <div class="album__name">{{ props.album.name }}</div>
  </div>
</template>

<script lang="ts" setup>

import { IAlbum } from '@/models/models';

import { computed } from 'vue';

import { API_URL } from '@/http';

const props = defineProps<{
  album: IAlbum
}>()

const albumCover = computed(() => {
  return `${API_URL}${props.album.cover}`
})

</script>

<style lang="sass" scoped>

@import '../styles/$theme-colors.sass'

.album
  width: 88px
  &__image
    width: 88px
    height: 88px
    border-radius: 15px
  &__name
    color: var(--main-color)
    text-align: center
    font-family: Poppins
    font-size: 10px
    font-style: normal
    font-weight: 600
    line-height: normal


</style>