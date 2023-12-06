<script setup>
import HelloWorld from './components/HelloWorld.vue'

const handleClick = () => {
  window.open('https://google.com', '_blank')
}
</script>

<template>
  <div>
    <span class="schema" @click="handleClick">
      <img src="/image%20(43).png" class="logo" alt="Vite logo" />
    </span>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  cursor: pointer;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
