<template>
  <div class="news-item">
    <img class="news-item__image" :src="trackCover" alt="">
    <h2 class="news-item__title">{{ props.track.name }}</h2>
    <p class="news-item__artist">{{ props.track.artists[0].name }}</p>
  </div>
</template>

<script lang="ts" setup>

import { ITrack } from '@/models/models';
import { computed } from 'vue';

import { API_URL } from '@/http';

const props = defineProps<{
  track: ITrack
}>()

const trackCover = computed(() => {
  return `${API_URL}${props.track.cover}`
})

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.news-item
  width: 120px
  &__image
    width: 120px
    height: 160px
    border-radius: 30px
  &__title
    color: var(--main-color)
    font-family: Poppins
    font-size: 18px
    font-style: normal
    font-weight: 600
    line-height: normal
    margin: 10px 0px 0px 0px
  &__artist
    color: var(--text-color)
    font-family: Poppins
    font-size: 15px
    font-style: normal
    font-weight: 400
    line-height: normal
    margin: 0

</style>