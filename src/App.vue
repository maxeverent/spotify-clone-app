<template>
  <div class="background">
    <router-view></router-view>
  </div>
  <audio id="player"/>
</template>

<script lang="ts" setup>

import { onMounted } from 'vue';
import { useStore } from './store';

const store = useStore()

onMounted(async() => {
  const player = document.getElementById('player') as HTMLAudioElement;
  player.volume = 0.1
  await store.dispatch('checkAuth').catch((e) => {
    console.log(e)
  })
})

</script>

<style>

body {
  margin: 0;
  padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@300;700&display=swap');

.background {
  background-color: gray;
  height: 100vh;
  display: flex;
  align-items: center;
}

</style>
