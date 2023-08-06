<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import {useRouter} from "vue-router";
const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
<TitleComponent value="Home"/>
  <button @click="goToAbout">Go to About</button>
</template>

<style scoped>

</style>
