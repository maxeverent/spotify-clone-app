<template>
  <div class="form-input" :style="{width: props.width}" :theme="theme">
    <input
      class="form-input__text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    >
    <CloseEyeIcon
      class="close-eye-icon"
      v-if="isPassword"
    />
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue';
import CloseEyeIcon from '@/icons/CloseEyeIcon.vue';

const theme = localStorage.getItem('theme')

interface Props {
  type?: string,
  name: string,
  placeholder: string
  width?: string,
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: () => '335px',
  type: () => 'text',
})

const isPassword = computed<boolean>(() => {
  if (props.type == 'password') {
    return true
  } else {
    return false
  }
})

const emit = defineEmits(['update:value'])

const updateValue = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  emit('update:value', target.value)
}

</script>

<style lang="sass" scoped>

.form-input
  position: relative
  &__text
    background-color: var(--background-color)
    position: relative
    z-index: 1
    border-radius: 20px
    border: 1px solid var(--input-border-color)
    margin: 0
    padding-left: 28px
    box-sizing: border-box
    height: 60px
    font-size: 15px
    width: 335px
    text-align: left
    color: var(--text-color)
  &__label
    position: absolute
    z-index: -1

.close-eye-icon
  background-image: url('~@/assets/eye-slash.svg')
  width: 20px
  height: 20px
  cursor: pointer
  position: absolute
  z-index: 3
  top: 20px
  right: 20px

</style>