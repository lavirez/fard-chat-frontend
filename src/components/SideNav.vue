<script lang="ts" setup>
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
