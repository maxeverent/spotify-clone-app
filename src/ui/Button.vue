<template>
  <button
    :class="['btn', `btn_${props.color}`,
    `btn_${props.size}`]"
    @click="click"
  >{{ props.label }}</button>
</template>

<script lang="ts" setup>

interface Props {
  label: string,
  color?: string | null
  size: string
}

const props = withDefaults(defineProps<Props>(), {
  color: () => 'green'
})

const emit = defineEmits<{
  click: []
}>()

const click = () => {
  emit('click')
}

</script>

<style lang="sass" scoped>

.btn
  border: none
  cursor: pointer
  color: #ffff
  font-family: Poppins
  text-align: center

  &_green
    background-color: #1ED760
  &_light
    background-color: #ffff
    color: #232323
  &_dark
    background-color: #1C1B1B

  &_small
    width: 160px
    height: 85px
    border-radius: 30px
    font-size: 16px
    font-weight: 600
    line-height: 24px
    letter-spacing: 0em
  &_normal
    width: 335px
    height: 70px
    border-radius: 20px
    font-size: 24px
    font-weight: 500
    line-height: 36px
    letter-spacing: 0em
  &_big
    width: 335px
    height: 80px
    border-radius: 25px
    font-size: 20px
    font-weight: 600
    line-height: 30px
    letter-spacing: 0em

</style>