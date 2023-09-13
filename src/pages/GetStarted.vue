<template>
  <div class="page">
    <div class="wrapper">
      <div class="logo">
        <img class="logo__item" src="~@/assets/logo.svg" alt="">
      </div>
      <div class="bottom">
        <h1 class="bottom__title">Enjoy Listening To Music</h1>
        <p class="bottom__info">Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </p>
        <Button label="Get Started" size="normal" @click="$router.push({name: 'chooseTheme'})"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import Button from '../ui/Button.vue';

</script>

<style scoped lang="sass">

.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  background-image: url('~@/assets/get-started.png')

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
    font-size: 20px
    font-weight: 600
    line-height: 30px
    letter-spacing: 0em
    text-align: center
  &__info
    font-family: Poppins
    font-size: 15px
    font-weight: 500
    line-height: 23px
    letter-spacing: 0em
    text-align: center
    color: #FFFFFF80
    margin: 25px


</style>