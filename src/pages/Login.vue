<template>
  <div class="page" :theme="theme">
    <div class="wrapper">
      <img class="top-lines" src="~@/assets/line-1.svg" alt="">
      <div class="logo">
        <img class="logo__item" src="~@/assets/logo.svg" alt="">
      </div>
      <div class="content">
        <h1 class="content__title">Enjoy Listening To Music</h1>
        <p class="content__info">
          Spotify is a proprietary Swedish audio streaming and meda services provider
        </p>
        <div class="content__buttons">
          <Button label="Register" size="small" @click="$router.push({name: 'register'})"/>
          <Button label="Sign In" size="small" :color="theme" @click="$router.push({name: 'signIn'})"/>
        </div>
      </div>
      <img class="bottom-lines" src="~@/assets/line-2.svg" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>

import '../styles/$theme-colors.sass'

import Button from '../ui/Button.vue';

const theme = localStorage.getItem('theme')

</script>

<style scoped lang="sass">

.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  background-color: var(--background-color)

.wrapper
  height: 100%
  display: flex
  flex-direction: column
  position: relative

.top-lines
  border-radius: 0 40px 0 0
  position: absolute

.bottom-lines
  border-radius: 0 0 40px 0
  position: absolute
  bottom: 0px
  right: 0px

.logo
  margin: 146px auto 86px auto

.content
  margin: 0px 20px
  z-index: 1
  &__title
    color: var(--main-color)
    font-family: Poppins
    font-size: 24px
    font-weight: 700
    line-height: 36px
    letter-spacing: 0em
    text-align: center

  &__info
  font-family: Poppins
  font-size: 14px
  font-weight: 400
  line-height: 21px
  letter-spacing: 0em
  text-align: center
  color: var(--text-color)


  &__buttons
    margin: 29px auto
    display: flex
    gap: 16px

</style>