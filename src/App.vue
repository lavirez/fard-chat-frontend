<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template class="bg-white dark:bg-black">
    <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/chat"> Chat </RouterLink>
    </nav>
    <RouterView />
    <h3> This is going to stick Around </h3>
</template>

<style scoped>
</style>
