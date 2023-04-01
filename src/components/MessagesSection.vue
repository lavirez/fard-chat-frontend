<script lang="ts" setup>
import MessageBubble from "./MessageBubble.vue";
import type { Chat } from "@/types/chat";
import ChatBar from "@/components/ChatBar.vue";
import ChatTopBar from "@/components/ChatTopBar.vue";

const props = defineProps<{
  chat: Chat
}>()

</script>

<template>
    <div class="flex flex-col space-y-4 h-screen">
        <ChatTopBar />
        <div class="flex flex-col overflow-y-auto">
            <div v-if="props.chat === undefined || null" class="">
                <p class="text-bold" > Select a Conversation or <span class="text-bold hover:text-white text-black"> Start One </span></p>
            </div>
            <div  :class="`chat ${message.self? 'chat-end': 'chat-start'}`" v-for="(message, index) in props.chat.messages" :key="index" v-else>
                <MessageBubble :message="message"/>
            </div>
        </div> 
        <ChatBar />
    </div>
</template>

