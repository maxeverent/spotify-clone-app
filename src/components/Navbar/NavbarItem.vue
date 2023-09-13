<template>
  <div class="navbar__item">
    <div :class="{active: isActive}"></div>
    <div class="icon" @click="navigate(props.page)">
      <svg xmlns="http://www.w3.org/2000/svg"
        :width="props.width"
        :height="props.height"
        viewBox="0 0 32 32"
      >
      <g :fill="iconColor">
        <slot/>
      </g>
    </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const theme = localStorage.getItem('theme')

interface Props {
  page: string
  width?: string,
  height?: string,
}

const props = withDefaults(defineProps<Props>(), {
  width: () => '32px',
  height: () => '32px'
})

const isActive = computed<boolean>(() => {
  const routeName = route.matched[1].name
  if (routeName == props.page) {
    return true
  } else {
    return false
  }
})

const iconColor = computed<string>(() => {
  const routeName = route.matched[1].name
  if (theme == 'light') {
    if (routeName == props.page) {
      return '#1ED760'
    } else {
      return '#00000080'
    }
  } else
    if (routeName == props.page) {
      return '#1ED760'
    } else {
      return '#FFFFFF80'
    }
})

const navigate = (page: string) => {
  router.push(page)
}

</script>

<style lang="sass" scoped>

@import '@/styles/$theme-colors.sass'

.navbar__item
  position: relative
  height: 100%
  width: 32px
  display: flex

.active
  position: absolute
  top: 0px
  height: 4px
  width: 100%
  background-color: #1ED760
  border-radius: 0px 0px 2px 2px

.icon
  cursor: pointer
  width: 32px
  height: 32px
  margin: auto


</style>