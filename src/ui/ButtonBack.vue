<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" cursor="pointer" @click="$router.go(-1)">
    <circle cx="16" cy="16" r="16" :fill="props.backgroudColor" :fill-opacity="props.opacity"/>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="black" x="3" y="5">
      <path d="M8.42871 11C8.42871 11.2405 8.51602 11.4466 8.70407 11.6253L13.9292 16.8616C14.077 17.0127 14.265 17.0952 14.4866 17.0952C14.9299 17.0952 15.2859 16.7379 15.2859 16.2775C15.2859 16.0507 15.1918 15.8514 15.0441 15.6934L10.3361 11L15.0441 6.30656C15.1918 6.14851 15.2859 5.94236 15.2859 5.72246C15.2859 5.26205 14.9299 4.90472 14.4866 4.90472C14.265 4.90472 14.077 4.98719 13.9292 5.13836L8.70407 10.3678C8.51602 10.5533 8.42871 10.7595 8.42871 11Z" :fill="props.color" :fill-opacity="props.opacity"/>
    </svg>
  </svg>
</template>

<script lang="ts" setup>

interface Props {
  color?: string,
  backgroudColor?: string,
  opacity?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: () => '#232323',
  backgroudColor: () => '#F0EFEF',
  opacity: () => 1
})

</script>

<style lang="sass" scoped>


</style>