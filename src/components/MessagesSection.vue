<script lang="ts" setup>
import MessageBubble from "./MessageBubble.vue";

const props = defineProps({
    chat: Object,
});
</script>

<template>
    <div class="flex flex-col space-y-4">
        <div v-if="chat === undefined or null" class="">
            <p class="text-bold" > Select a Conversation or <span class="text-bold hover:text-white text-black"> Start One </span></p>
        </div>
        <div :class="'chat' message.self 'chat-end' : 'chat-start'" v-for="message in chat.messages" v-else>
            <MessageBubble v-for="message in chat.messages" />
        </div>
    </div>
</template>

<style scoped>
.chat {
  &-bubble {
    @apply rounded-box;
    min-height: 2.75rem;
    min-width: 2.75rem;
    /* default */
    & {
      @apply bg-neutral text-neutral-content;
    }
    /* brand colors */
    &-primary {
      @apply bg-primary text-primary-content;
    }
    &-secondary {
      @apply bg-secondary text-secondary-content;
    }
    &-accent {
      @apply bg-accent text-accent-content;
    }
    /* state colors */
    &-info {
      @apply bg-info text-info-content;
    }
    &-success {
      @apply bg-success text-success-content;
    }
    &-warning {
      @apply bg-warning text-warning-content;
    }
    &-error {
      @apply bg-error text-error-content;
    }
  }
  &-start .chat-bubble {
    @apply rounded-bl-none;
    &:before {
      left: -0.75rem;
    }
  }
  &-end .chat-bubble {
    @apply rounded-br-none;
    &:before {
      left: 100%;
    }
  }
}
</style>
