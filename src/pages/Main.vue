<template>
  <div class="wrapper">
    <div class="nav">
      <SearchIcon/>
      <img src="~@/assets/logo.svg" alt="" class="logo">
      <ButtonMenu :color="buttonMenuColor"/>
    </div>
    <div class="cover">
      <div class="cover__info">
        <p class="cover__text">New Album</p>
        <h2 class="cover__title">Where Are <br>You</h2>
        <p class="cover__text">Ollane, <br>
            Miyagi & Andy Panda</p>
      </div>
      <img class="cover__image" src="~@/assets/cover-img.png" alt="cover">
    </div>
    <SlideMenu/>
    <div class="content">
      <router-view/>
    </div>
    <div class="playlist">
      <div class="playlist__title">
        <div class="playlist__text">
          Playlist
        </div>
        <div class="see-more">See More</div>
      </div>
      <Track v-for="(track, i) in tracks" :key="i" :track="track"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import SlideMenu from '@/components/SlideMenu/SlideMenu.vue'
import ButtonMenu from '@/ui/ButtonMenu.vue';
import SearchIcon from '@/icons/SearchIcon.vue';

import Track from '@/components/Track.vue';
import { ITrack } from '@/models/models';

import { computed, onMounted } from 'vue';

import { useStore } from '@/store';

const theme = localStorage.getItem('token')

const buttonMenuColor = computed(() => {
  if (theme == 'light') {
    return 'black'
  } else {
    return 'white'
  }
})

const store = useStore()

const tracks = computed<ITrack[]>(() => {
  return store.getters.getTracks
})

onMounted(async() => {
  await store.dispatch('getTracks').catch((e) => {
    console.log(e)
  })
})

</script>

<style lang="sass" scoped>

@import '../styles/$theme-colors.sass'

.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  display: flex
  flex-direction: column
  background-color: var(--background-color)

.logo
  width: 140px
  height: 42px
  margin: 0px 59px 0px 44px

.wrapper
  display: flex
  flex-direction: column
  position: relative
  height: 742px
  padding: 0px 20px
  overflow-x: hidden

.search
  background-image: url('~@/assets/search.svg')
  background-position: center
  background-color: #ffff
  padding: 0
  border: none
  width: 36px
  height: 36px
  cursor: pointer

.menu
  background-image: url('~@/assets/menu.svg')
  background-repeat: no-repeat
  background-position: center
  background-color: #ffff
  border: none
  width: 4px
  height: 16px
  cursor: pointer

.cover
  position: relative
  width: 335px
  height: 140px
  border-radius: 30px
  background: #1ED760
  margin: auto 0px
  &__info
    margin: 15px
    text-align: left
    font-family: Poppins
    font-style: normal
    line-height: normal
  &__text
    margin: 0
    color: rgba(255, 255, 255, 0.90)
    font-size: 10px
    font-weight: 400
  &__title
    margin: 0
    color: #FFF
    font-size: 20px
    font-weight: 700
  &__image
    bottom: 0px
    right: 19px
    position: absolute
    width: 204px
    height: 162px

.nav
  margin: 55px auto 0px auto
  display: flex
  align-items: center


.title
  color: #232323
  text-align: center
  font-family: Poppins
  font-size: 36px
  font-style: normal
  font-weight: 600
  line-height: normal
  margin: 18px 0px 0px 0px

.content
  margin: 30px 0px 35px 0px

.playlist
  position: relative
  overflow-y: hidden
  height: 124px
  &__title
    display: flex
    justify-content: space-between
    align-items: center
  &__text
    color: var(--main-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 500
    line-height: normal

.see-more
  color: var(--text-color)
  font-family: Poppins
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: normal


</style>