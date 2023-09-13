<template>
  <div class="navbar" :theme="theme">
    <NavbarItem v-for="(page, i) in navbar" :key="i" :page="page.name">
      <component :is="page.icon"/>
    </NavbarItem>
  </div>
</template>

<script lang="ts" setup>

import NavbarItem from './NavbarItem.vue';
import HomeIcon from '@/icons/HomeIcon.vue'
import CompassIcon from '@/icons/CompassIcon.vue'
import HeartIcon from '@/icons/HeartIcon.vue'
import PersonIcon from '@/icons/PersonIcon.vue'

const theme = localStorage.getItem('theme')

const navbar = [
  {
    name: 'main',
    icon: HomeIcon
  },
  {
    name: '',
    icon: CompassIcon
  },
  {
    name: 'favorite',
    icon: HeartIcon
  },
  {
    name: 'profile',
    icon: PersonIcon
  },
]

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'
.navbar
  width: 100%
  height: 70px
  border-radius: 0px 0px 40px 40px
  background: var(--nav-color)
  display: flex
  justify-content: space-around
  margin-top: auto
  position: relative
  &::before
    content: ''
    inset: -5px
    transform: translate(0px, -75px)
    background: var(--nav-shadow-color)
    filter: blur(10px)
    position: absolute
    pointer-events: none

</style>