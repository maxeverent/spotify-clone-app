<template>
  <div class="page" :theme="theme">
    <div class="wrapper">
      <div class="nav">
        <ButtonBack :backgroudColor="buttonBack" :color="buttonBackColor"/>
        <img src="~@/assets/logo.svg" alt="" class="logo">
      </div>
      <h1 class="title">Sign In</h1>
      <SupportLink/>
      <div class="register-inputs">
        <Input placeholder="Enter Username Or Email" name="login" v-model:value="login"/>
        <Input placeholder="Password" name="password" type="password" v-model:value="password"/>
      </div>
      <p class="recovery-password">Recovery Password</p>
      <p class="error" v-if="error != ''">{{ error }}</p>
      <Button label="Sign In" size="big" @click="signIn"/>
      <div class="help-info">Not a member? <span class="help-info_green">Register Now</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import ButtonBack from '../ui/ButtonBack.vue';
import SupportLink from '../ui/SupportLink.vue';
import Button from '../ui/Button.vue';
import Input from '../ui/Input.vue';

import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const theme = localStorage.getItem('theme')

const buttonBack = computed(() => {
  if (theme == 'light') {
    return '#F0EFEF'
  } else {
    return '#232222'
  }
})

const buttonBackColor = computed(() => {
  if (theme == 'light') {
    return '#232323'
  } else {
    return '#FFF'
  }
})

const store = useStore()
const router = useRouter()

const login = ref<string>('')
const password = ref<string>('')

const signIn = async () => {
  await store.dispatch('login', {login: login.value, password: password.value})
    .then(() => router.push({name: 'news'}))
    .catch((e) => {
      console.log(e.response?.data?.message)
      error.value = e.response?.data?.message
    })
}

const error = ref<string>('')

</script>

<style scoped lang="sass">

@import '../styles/$theme-colors.sass'
.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  background-color: var(--background-color)

.logo
  width: 140px
  height: 42px

.wrapper
  margin: auto
  height: 694px
  display: flex
  flex-direction: column
  position: relative
  padding: 55px 20px 63px 20px

.nav
  margin: 0px 23px
  display: flex
  align-items: center
  gap: 52px

.title
  color: var(--main-color)
  text-align: center
  font-family: Poppins
  font-size: 36px
  font-style: normal
  font-weight: 600
  line-height: normal
  margin: 90px 0px 0px 0px

.register-inputs
  display: flex
  flex-direction: column
  gap: 10px
  margin: 26px 0px 18px 0px

.recovery-password
  cursor: pointer
  color: var(--text-color)
  font-family: Poppins
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: normal
  margin: 0px 0px 39px 0px

.error
  color: red
  font-family: Poppins
  font-size: 12px
  font-style: normal
  font-weight: 500
  line-height: normal
  margin: 0px 0px 39px 0px

.help-info
  margin-top: auto
  color: var(--main-color)
  text-align: center
  font-family: Poppins
  font-size: 14px
  font-style: normal
  font-weight: 500
  line-height: normal
  &_green
    color: #1ED760
    cursor: pointer

</style>