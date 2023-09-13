<template>
  <Swiper
    :slidesPerView="3.9"
    :freeMode="true"
    :spaceBetween="10"
    class="slide-menu"
    :theme="theme"
    >
    <SwiperSlide v-for="(item, i) in menu" :key="i">
      <SlideMenuItem :key="i" :name="item.name" :page="item.page"/>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>

import SlideMenuItem from './SlideMenuItem.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const theme = localStorage.getItem('theme')

const menu = [
  {
    name: 'News',
    page: 'news'
  },
  {
    name: 'Video',
    page: ''
  },
  {
    name: 'Artists',
    page: ''
  },
  {
    name: 'Podcasts',
    page: ''
  }
]

</script>

<style lang="sass" scoped>

.slide-menu
  display: flex
  width: 355px
  gap: 32px
  overflow: hidden

</style>