<template>
  <div class="button-menu">
    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
      <circle cx="2" cy="2" r="2" :fill="props.color" fill-opacity="0.5"/>
      <circle cx="2" cy="8" r="2" :fill="props.color" fill-opacity="0.5"/>
      <circle cx="2" cy="14" r="2" :fill="props.color" fill-opacity="0.5"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: () => 'black'
})

</script>


<style lang="sass" scoped>

.button-menu
  width: 4px
  height: 16px
  cursor: pointer

</style>