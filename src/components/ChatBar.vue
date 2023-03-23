<script setup lang="ts">
import { PaperClipIcon, PaperAirplaneIcon, MicrophoneIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="fixed inset-x-0 max-w bottom-0 mt-2 shadow-2xl">
      <div class="bg-white">
        <div class="mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex flex-row">
            <div class="flex flex-row w-1/6">
              <span class="flex rounded-lg p-2">
                <PaperClipIcon class="h-6 w-6 text-blue" aria-hidden="true" />
              </span>
              <span class="flex rounded-lg p-2">
                <MicrophoneIcon class="h-6 w-6 text-blue" aria-hidden="true" />
              </span>
            </div>
            <div class="block mt-1 flex w-2/3">
                <form action="#" class="w-full">
                    <span type="text" name="message" id="chat-message" class="textarea block w-full rounded-full md border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" dir="auto" placeholder="Message" contenteditable>
                    </span>
                </form>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3 w-1/6">
              <button type="button" class="mr-1 flex rounded-md p-2 hover:bg-indigo focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                <PaperAirplaneIcon class="h-6 w-6 text-dark" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
 
 <style>
 .textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
}

.textarea[contenteditable]:empty::before {
  content: "Message";
  color: gray;
}
 </style>
