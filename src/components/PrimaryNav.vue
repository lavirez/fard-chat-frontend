<script lang="ts" setup>
import { BellIcon, ClipboardIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <div class="flex flex-col items-center space-y-2 mt-2">
        <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">View notifications</span>
            <ClipboardIcon class="h-6 w-6" aria-hidden="true" />
        </button>
    </div>
</template>

<style>
</style>
