<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template class="bg-white dark:bg-black">
    <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/chat"> Chat </RouterLink>
    </nav>
    <RouterView />
</template>

<style scoped>
</style>
