<script lang="ts" setup>
import type { Message } from '@/types/chat';

const props = defineProps<{
  message: Message 
}>()
</script>

<template>
    <div :class="`chat-bubble + ${ message.self ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-600' }`">
        {{ props.message.content }}
    </div>
    <div v-if="message.last" class="chat-footer opacity-50">
        <p v-if="!props.message.seen"> sent </p>
        <p v-else> seen </p>
    </div>
</template>

