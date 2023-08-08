<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import {useAppStore} from "../stores/appStore";
import {ref} from "vue";

const { changeMessage } = useAppStore()

const title = ref('About')
const displayTitle = ref(true)
</script>

<template>
<TitleComponent
    v-if="displayTitle"
    :value="title"
    @on-mounted="($event: string) => changeMessage($event)"
    @click="title = 'About !!!'"
/>
<button
  @click="displayTitle = !displayTitle"
>Toggle title !</button>
</template>

<style scoped>

</style>
