<script setup lang="ts">
import {onMounted} from "vue";

export interface TitleComponentProps {
  value: string
}

defineProps<TitleComponentProps>()
const emit = defineEmits<{
  (e: 'on-mounted', payload: string): void
}>()

onMounted(() => {
  emit('on-mounted', 'test')
})
</script>

<template>
  <h1>{{ value }}</h1>
</template>
