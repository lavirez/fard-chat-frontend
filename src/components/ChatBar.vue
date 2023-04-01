<script setup lang="ts">
import { PaperAirplaneIcon, UsersIcon } from '@heroicons/vue/20/solid';
</script>

<template>
    <div class="mt-1 flex rounded-md shadow-sm mb-1 stick">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input type="email" name="email" id="email" class="block w-full h-12 rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="John Smith" dir="auto"/>
      </div>
      <button @click="SendMessage" type="button" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        <PaperAirplaneIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        <span>Send</span>
      </button>
    </div>
</template>
