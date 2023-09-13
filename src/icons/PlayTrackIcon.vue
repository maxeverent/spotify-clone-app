<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 17 17" fill="none" cursor="pointer">
    <circle cx="8.18182" cy="8.18182" r="8.18182" :fill="backgroundColor"/>
    <path d="M6.13635 11.25L11.5057 8.18183L6.13635 5.11365V11.25Z" :fill="color"/>
  </svg>
</template>

<script lang="ts" setup>

import { computed } from 'vue';

interface Props {
  theme: string | null
}

const props = defineProps<Props>()

const color = computed(() => {
  if (props.theme == 'dark') {
    return '#fff'
  }
  if (props.theme == 'light') {
    return '#232323'
  }
  return '#232323'
})

const backgroundColor = computed(() => {
  if (props.theme == 'dark') {
    return '#2C2C2C'
  }
  if (props.theme == 'light') {
    return '#E9E9E9'
  }
  return '#E9E9E9'
})

</script>