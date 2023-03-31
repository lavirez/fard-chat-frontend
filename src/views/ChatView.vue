<script setup lang="ts">
import PrimaryNav from "../components/PrimaryNav.vue";
import SideNav from "../components/SideNav.vue";
</script>

<template>
    <div class="flex flex-row h-screen">
        <div class="w-16 bg-gray-200">
            <PrimaryNav />
        </div>
        <div class="max-w-64 bg-green-200">
            <SideNav />
        </div>
        <div class="flex-auto bg-blue-200">main content</div>
    </div>
</template>

<style scoped>
</style>
