<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import {useAppStore} from "../stores/appStore";

const { changeMessage } = useAppStore()
</script>

<template>
<TitleComponent
    value="About"
    @on-mounted="($event: string) => changeMessage($event)"
/>
</template>

<style scoped>

</style>
