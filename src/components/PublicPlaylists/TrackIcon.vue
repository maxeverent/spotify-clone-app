<template>
  <div class="track-icon" :style="{backgroundImage: trackCover}"></div>
</template>

<script lang="ts" setup>

import { ITrack } from '@/models/models';
import { computed } from 'vue';

import { API_URL } from '@/http';

const props = defineProps<{
  track: ITrack
}>()

const trackCover = computed(() => {
  return `url(${API_URL}${props.track.cover})`
})

</script>

<style lang="sass" scoped>

.track-icon
  width: 62px
  height: 62px
  border-radius: 20px
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20)
  background-size: 100% 100%

</style>