<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'

function profile() {
}
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" >
    <div class="flex flex-row mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="sm:ml-6 sm:flex sm:flex-row sm:items-center">
          <div class="flex items-center space-x-4">
            <!-- todo: make this button go back a page -->
            <button type="button" class="rounded-md sm:left-0 bg-white p-1 text-black-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-offset-2">
              <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <div class="flex-shrink-0">
              <img class="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80rc=" alt="" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium text-gray-900">Tim Cook</p>
              <p class="truncate text-sm text-gray-500">is typing...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Disclosure>
</template>

