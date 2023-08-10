<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import {useAppStore} from "../stores/appStore";
import {ref, watch} from "vue";
import {storeToRefs} from "pinia";
import {pick} from "lodash";

const store = useAppStore()
const emit = defineEmits<{
  (e: 'new-message', value: string): void
}>()

const { myCompleteMessage } = storeToRefs(store)

const user = ref({
  id: 123,
  firstName: 'Adri',
  lastName: 'HM'
})

const title = ref('About')
const displayTitle = ref(true)

watch(myCompleteMessage, async (value) => {
  if(!value) {
    return
  }

  emit('new-message', value)
})

watch(myCompleteMessage, async (value) => {
  if(!value) {
    return
  }

  await fetch('http://server.com/user', {
    method: 'POST',
    body: JSON.stringify(pick(user.value, 'id'))
  })
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
