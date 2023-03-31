<script lang="ts" setup>
const props = defineProps({
    message: Object,
}); 
</script>

<template>
    <div class="chat-bubble">
        {{ message.content }}
    </div>
    <div v-if="message.last" class="chat-footer opacity-50">
        <p v-if="!message.seen"> sent </p>
        <p v-else> seen </p>
    </div>
</template>
