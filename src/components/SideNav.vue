<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/20/solid';

const router = useRoute();

const people = [
  {
    id: "1",
    name: 'Calvin Hawkins',
    email: 'Thanks for your time',
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "2",
    name: 'Kristen Ramos',
    email: 'I just removed the items',
    image:"https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "3",
    name: 'Ted Fox',
    email: 'No problem',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "4",
    name: 'Sam Altman',
    email: 'How To start a startup with Dustin Nowitzky',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Lilly',
    id: "6",
    email: 'Ahhh',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "5",
    name: 'Max Litterman',
    email: 'Dude Hey!',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "7",
    name: 'Jake Peralta',
    email: 'Title of yout sex tape',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "8",
    name: 'Ed Sheeran',
    email: 'Shape of You',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "9",
    name: 'Kiana',
    email: 'ok',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Mosby',
    id: "10",
    email: 'Rooooooooooooooooooooooooooooooooooooooooooooooooooooobin PleaAAAAAAAAAAAAAAAASE',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Mom',
    id: "11",
    email: 'Yes',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Fox Jannet',
    id: "12",
    email: 'This is the greatest shit I ever heard',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "14",
    name: 'Travis Scott',
    email: 'Hayy Hoo, In my fumes, ',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    id: "13",
    name: 'Ted Fox',
    email: 'No problem',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'FireFox Agent',
    id: "15",
    email: 'Ay',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Msihka',
    id: "15",
    email: 'Mewo',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
  {
    name: 'Cpt. Holt',
    id: "15",
    email: 'Mip Borp Zirp',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
  },
]
</script>

<template>
    <div class="flex flex-col mx-4 justify-between space-y-2 h-screen pa-1">
        <div class="flex-none relative mt-1 rounded-md shadow-sm">
            <input type="text" name="search_chat" id="search-chat" class="bg-white-200 block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-blue-900 sm:text-sm" placeholder="Search" />
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
        </div>
        <div class="flex flex-col flex-auto rounded-md bg-white-200 p-2 shadow-sm border-slate-950 overflow-y-auto">
              <a v-for="person in people" :key="person.email" :href="'/chat/' + person.name" class="block border-b mt-1 rounded-lg hover:bg-gray-400 group">
                <div class="border-l-2 p-2 rounded-lg group-hover:border-l-4 group-hover:border-blue-500">
                    <div class="flex flex-row items-center space-x-2">
                        <img class="h-10 w-10 rounded-full ml-2" :src="person.image" alt="" />
                        <div class="flex-grow text-sm truncate"> 
                            <p class="text-base font-medium" > {{ person.name }} </p>
                            <p class="flex-grow text-sm font-light truncate" > {{ person.email }} </p>
                        </div>
                        <span>b</span>
                    </div>
                </div>
              </a>
        </div>
        <button class="group flex flex-row justify-center items-center rounded-md bg-white-200 p-2 shadow-sm hover:bg-gray-400" type="button">
            <PlusIcon class="h-8 w-8 text-gray-400 group-hover:text-white mx-1" /> 
            <p class="text-gray-500 font-medium group-hover:text-white"> Add New Conversation </p>
        </button >
    </div>    
</template>

<style>
</style>
