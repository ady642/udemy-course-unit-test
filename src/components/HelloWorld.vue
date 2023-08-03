<script setup>
import { ref, watch, defineProps, computed } from 'vue'
import axios from 'axios'
import {useAppStore} from "../stores/appStore.ts";
import TitleComponent from "./TitleComponent.vue";

const props = defineProps({
  msg: String,
})

const count = ref(0)

const increment = () => {
  count.value++
}

const prefixedMessage = computed(() => `My Title: ${props.msg}`)

const { changeMessage } = useAppStore()

watch(() => props.msg, (value) => {
  console.log('We are in the test')
  //axios.get('https://httpbin.org/get')
  changeMessage(value)
})
</script>

<template>
  <title-component :value="prefixedMessage" />

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install NOW !!!
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
