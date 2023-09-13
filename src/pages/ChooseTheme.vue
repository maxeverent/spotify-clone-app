<template>
  <div class="page">
    <div class="wrapper">
      <div class="logo">
        <img class="logo__item" src="~@/assets/logo.svg" alt="">
      </div>
      <div class="bottom">
        <h1 class="bottom__title">Choose mode</h1>
        <div class="bottom__buttons">
          <SwitchTheme type="light" :selected="theme" @chooseTheme="chooseTheme"/>
          <SwitchTheme type="dark" :selected="theme" @chooseTheme="chooseTheme"/>
        </div>
        <Button label="Continue" size="normal" @click="goNext"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import Button from '../ui/Button.vue';
import SwitchTheme from '../ui/SwitchTheme.vue';

import { ref } from 'vue';
import router from '@/router';

const theme = ref<string | null>(null)

const goNext = () => {
  if (theme.value) {
    router.push({name: 'login'})
  }
}

const chooseTheme = (choosedTheme: string) => {
  theme.value = choosedTheme
}

</script>

<style scoped lang="sass">

.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  background-image: url('~@/assets/choose-mode.png')

.wrapper
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between

.logo
  margin: 57px auto

.bottom
  margin: 50px 20px
  &__title
    color: #ffff
    font-family: Poppins
    font-size: 24px
    font-weight: 600
    line-height: 36px
    letter-spacing: 0em
    text-align: center
  &__buttons
    margin: 30px auto 20px auto
    justify-content: center
    display: flex
    gap: 50px

.button-light
  width: 80px
  height: 80px
  border-radius: 100%
  border: none
  cursor: pointer

</style>