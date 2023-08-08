<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import {useAppStore} from "../stores/appStore";
import {ref, watch} from "vue";
import {storeToRefs} from "pinia";

const store = useAppStore()
const emit = defineEmits<{
  (e: 'new-message', value: string): void
}>()

const { myCompleteMessage } = storeToRefs(store)

const title = ref('About')
const displayTitle = ref(true)

watch(myCompleteMessage, (value) => {
  if(!value) {
    return
  }

  emit('new-message', value)
})
</script>

<template>
<TitleComponent
    v-if="displayTitle"
    :value="title"
    @on-mounted="($event: string) => { store.changeMessage($event) }"
    @click="title = 'About !!!'"
/>
<button
  @click="displayTitle = !displayTitle"
>Toggle title !</button>
</template>

<style scoped>

</style>
