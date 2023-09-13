<template>
  <div class="switch-theme">
    <button
      :class="[
        'switch-theme__button',
        `switch-theme__button_${props.type}`,
      ]"
      @click="chooseTheme"
    ></button>
    <div class="ellipse" v-if="props.selected == props.type"></div>
    <span class="switch-theme__title">{{ props.type }}</span>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  type: string,
  selected: string | null
}

const props = defineProps<Props>()

const emit = defineEmits(['chooseTheme'])

const chooseTheme = () => {
  localStorage.setItem('theme', props.type)
  emit('chooseTheme', props.type)
}

</script>

<style lang="sass" scoped>

.ellipse
  position: absolute
  background-color: #1ED760
  width: 50px
  height: 40px
  top: 45px
  left: 15px
  border-radius: 100%

.switch-theme
  display: flex
  flex-direction: column
  position: relative
  &__button
    z-index: 10
    width: 80px
    height: 80px
    border: none
    border-radius: 100%
    background-color: #8F8F8F42
    fill: rgba(143, 143, 143, 0.26)
    backdrop-filter: blur(17px)
    cursor: pointer
    &_light
      background-image: url('~@/assets/light.svg')
    &_dark
    background-image: url('~@/assets/dark.svg')

  &__title
    font-family: Poppins
    font-size: 15px
    font-weight: 400
    line-height: 23px
    letter-spacing: 0em
    text-align: center
    color: #FFFFFF80
    margin-top: 7px


</style>