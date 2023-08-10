<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import {useRouter} from "vue-router";
import {useAppStore} from "../stores/appStore";
import {storeToRefs} from "pinia";
import {watch} from "vue";
const router = useRouter()
const store = useAppStore()

const goToAbout = () => {
  router.push('/about')
}

const { myCompleteMessage } = storeToRefs(store)

watch(myCompleteMessage, () => {
  store.changeMessage('Test')
})

</script>

<template>
<TitleComponent
    v-if="myCompleteMessage"
    :value="myCompleteMessage"/>
  <button @click="goToAbout">Go to About</button>
</template>

<style scoped>

</style>
