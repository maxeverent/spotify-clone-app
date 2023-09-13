<template>
  <div class="support-link">If You Need Any Support <span class="support-link_green" :theme="theme">Click Here</span></div>
</template>

<script lang="ts" setup>

const theme = localStorage.getItem('theme')

</script>

<style lang="sass" scoped>

@import '../styles/$theme-colors.sass'

.support-link
  margin-top: 18px
  color: var(--support-link-color)
  text-align: center
  font-family: Poppins
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: normal
  text-transform: capitalize
  &_green
    color: rgba(0, 255, 56, 0.50)
    font-weight: 500
    cursor: pointer

</style>