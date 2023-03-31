<script lang="ts" setup>
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'Thanks for your time',
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Kristen Ramos',
    email: 'I just removed the items',
    image:"https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Ted Fox',
    email: 'No problem',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
]
</script>

<template>
    <div class="flex flex-col p-3 justify-between space-y-2">
        <div class="relative mt-1 rounded-md shadow-sm">
            <input type="text" name="search_chat" id="search-chat" class="bg-gray-200 block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search" />
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
        </div>
        <div class="rounded-md bg-gray-200 p-2 shadow-sm">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="person in people" :key="person.email" class="flex py-4">
                <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
                    <p class="text-sm text-gray-500">{{ person.email }}</p>
                </div>
              </li>
            </ul>
        </div>
        <button class="group flex flex-row items-center rounded-md bg-gray-200 p-2 shadow-sm hover:bg-gray-400" type="button">
          <PlusIcon class="h-8 w-8 text-gray-400 group-hover:text-white" /> 
          <p class="text-gray-500 font-medium group-hover:text-white"> Add New Conversation </p>
        </button >
    </div>    
</template>

<style>
</style>
