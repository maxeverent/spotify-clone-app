<template>
  <Swiper
    :slidesPerView="2.9"
    :freeMode="true"
    :spaceBetween="28"
    class="news">
    <SwiperSlide v-for="(item, i) in tracks" :key="i" style="min-width: 120px;">
      <NewsItem :track="item" :key="i"/>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>

import { computed, onMounted } from 'vue';
import NewsItem from './NewsItem.vue';
import { ITrack } from '@/models/models';

import { Swiper, SwiperSlide } from 'swiper/vue';

import { useStore } from '@/store';

const store = useStore()

const tracks = computed<ITrack[]>(() => {
  return store.getters.getTracks
})

onMounted(async() => {
  await store.dispatch('getTracks').catch((e) => {
    console.log(e.response?.data?.message)
  })
})

</script>

<style lang="sass">

.news
  width: 355px
  display: flex
  gap: 28px
  height: 220px

</style>