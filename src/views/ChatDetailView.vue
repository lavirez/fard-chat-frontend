<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute()
const chatID = route.params.id;
</script>

<template>
    <div>
     <h2> Chat number {{ chatID }} </h2>
    </div>
</template>
