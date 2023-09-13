<template>
  <div class="page" :theme="theme">
    <div class="wrapper">
      <div class="nav">
        <ButtonBack :backgroudColor="buttonBack" :color="buttonBackColor"/>
        <img src="~@/assets/logo.svg" alt="" class="logo">
      </div>
      <h1 class="title">Register</h1>
      <SupportLink/>
      <div class="register-inputs">
        <Input placeholder="Full name" name="fullname" v-model:value="user.fullname"/>
        <Input placeholder="Enter Email" name="email" v-model:value="user.email"/>
        <Input placeholder="Enter Username" name="username" v-model:value="user.username"/>
        <Input placeholder="Password" name="password" type="password" v-model:value="user.password"/>
      </div>
      <p class="error" v-if="error != ''">{{ error }}</p>
      <Button label="Create Account" size="big" @click="register"/>
      <div class="help-info">Do you have an account? <span class="help-info_green">Sign In</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import ButtonBack from '../ui/ButtonBack.vue';
import SupportLink from '../ui/SupportLink.vue';
import Button from '../ui/Button.vue';
import Input from '../ui/Input.vue';

import { IUser } from '@/models/auth-models';

import { reactive, computed, ref } from 'vue';
import { useStore } from '@/store';

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

const user: IUser = reactive({
  fullname: '',
  username: '',
  email: '',
  password: ''
})

import { useRouter } from 'vue-router';

const router = useRouter()

const store = useStore()

const register = async () => {
  await store.dispatch('register', user)
    .then(() => router.push({name: 'news'}))
    .catch((e) => {
      console.log(e.response?.data?.message)
      error.value = e.response?.data?.message
    })
}

const error = ref<string>('')

</script>

<style scoped lang="sass">

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
  margin: 18px 0px 0px 0px

.register-inputs
  display: flex
  flex-direction: column
  gap: 10px
  margin: 26px 0px 18px 0px

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