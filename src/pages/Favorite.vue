<template>
  <div class="wrapper">
    <div class="title">
      <div class="nav">
        <ButtonBack :color="'#fff'" :backgroudColor="'#8E8E8E'" :opacity="0.4"/>
        <ButtonMenu :color="'white'"/>
      </div>
    </div>
    <div class="info">
      <p class="info__artist">Billie Eilish</p>
      <p class="info__tracks">2 Album, 67 Single Music</p>
      <p class="info__description">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
    </div>
    <div class="albums">
      <h2 class="albums__title">Album</h2>
      <Swiper
        :slidesPerView="3.9"
        :freeMode="true"
        :spaceBetween="70"
        class="albums__items">
        <SwiperSlide v-for="(album, i) in albums" :key="i">
          <Album :key="i" :album="album"/>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="songs">
      <div class="songs__title">
        <h2 class="songs__title-text">Songs</h2>
        <span class="songs__title-more">See more</span>
      </div>
      <Track v-for="(track, i) in tracks" :key="i" :track="track"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { Swiper, SwiperSlide } from 'swiper/vue';

import ButtonBack from '@/ui/ButtonBack.vue';
import ButtonMenu from '@/ui/ButtonMenu.vue';

import { ITrack } from '@/models/models';
import { IAlbum } from '@/models/models';

import Track from '@/components/Track.vue';
import Album from '@/components/Album.vue';
import { useStore } from '@/store';
import { computed, onMounted } from 'vue';

const store = useStore()

onMounted(async() => {
  await store.dispatch('getAlbums').catch((e) => console.log(e.response?.data?.message))
  await store.dispatch('getTracks').catch((e) => console.log(e.response?.data?.message))
})

const albums = computed<IAlbum[]>(() => {
  return store.getters.getAlbums
})

const tracks = computed<ITrack[]>(() => {
  return store.getters.getTracks
})

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

p, h2
  margin: 0

.wrapper
  display: flex
  height: 742px
  flex-direction: column
  position: relative
  padding: 0px 20px

.title
  width: 375px
  min-height: 248px
  border-radius: 0px 0px 95px 95px
  background: url('~@/assets/favorite-title.png')
  margin-left: -20px

.nav
  display: flex
  width: 283px
  margin: 55px auto 0px auto
  align-items: center
  justify-content: space-between
  padding: 0px 54px 0px 42px
  position: absolute

.info
  width: 226px
  margin: 8px auto 21px auto
  font-family: Poppins
  font-style: normal
  text-align: center
  line-height: normal
  &__artist
    color: var(--main-color)
    font-size: 20px
    font-weight: 600
  &__tracks
    color: var(--text-color)
    font-size: 14px
    font-weight: 500
  &__description
    color: var(--text-color)
    font-size: 12px
    font-weight: 500
    margin: 7px 0px

.albums

  &__title
    color: var(--main-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 600
    line-height: normal
  &__items
    margin: 26px 0px
    display: flex
    gap: 20px


.songs
  position: relative
  overflow-y: hidden
  &__title
    display: flex
    justify-content: space-between
    align-items: center
  &__title-text
    color: var(--main-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 500
    line-height: normal
  &__title-more
    color: var(--text-color)
    font-family: Poppins
    font-size: 12px
    font-style: normal
    font-weight: 400
    line-height: normal

.see-more
  color: rgba(0, 0, 0, 0.50)
  font-family: Poppins
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: normal

</style>