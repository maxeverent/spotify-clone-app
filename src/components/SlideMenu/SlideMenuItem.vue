<template>
  <div class="slide-menu__item" @click="navigate(page)">
    <div class="slide-menu__text" :class="{'slide-menu__text_active': isActive }">{{ props.name }}</div>
    <div :class="{active: isActive}"></div>
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'

interface Props {
  page: string,
  name: string
}

const props = defineProps<Props>()

const route = useRoute()
const router = useRouter()


const isActive = computed<boolean>(() => {
  if (route.name == props.page) {
    return true
  } else {
    return false
  }
})

const navigate = (page: string) => {
  router.push({name: page})
}

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.slide-menu
  width: auto
  &__text
    color: var(--text-color)
    font-family: Poppins
    font-size: 20px
    font-style: normal
    font-weight: 500
    line-height: normal
    cursor: pointer
    text-align: center
    &_active
      color: var(--main-color)

.active
  width: 28px
  height: 3px
  border-radius: 0px 0px 2px 2px
  background: #1ED760
  margin: 0 auto

</style>