<template>
  <div class="page" :theme="theme">
    <router-view/>
    <Navbar/>
  </div>
</template>

<script lang="ts" setup>

import Navbar from '@/components/Navbar/Navbar.vue';

const theme = localStorage.getItem('theme')

</script>

<style lang="sass" scoped>

.page
  width: 375px
  height: 812px
  border-radius: 40px
  margin: auto
  background-color: var(--background-color)
  position: relative
  overflow: hidden

</style>