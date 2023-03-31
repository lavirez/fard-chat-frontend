<script setup lang="ts">
import PrimaryNav from "../components/PrimaryNav.vue";
import SideNav from "../components/SideNav.vue";
import MessagesSection "../components/MessagesSection";

// fetch chat object with messages
// if chat is empty find show no conversation selected
// in the chatDetail Component 
// const chat:Object = [];
const chat = [
    id: "#skj-jsd23",
    end_user: [
        id: "#sdl034fsdkldfspd9fg80sdsdfgsfi-sdfgsdf",
        first_name: "Alireza",
        last_name: "Tafreshi",
        image: "",
    ],
    messages: [
        {
            content: "hello there",
            self: true,
            timstamp: ""
        },
        {
            content: "I am from Join Champet from so you can hell it to the next level of the projec",
            self: true,
            timstamp: ""
        },
        {
            content: "Hey there how are you doing friend",
            self: false,
            timstamp: ""
        },
        {
            content: "oh yeah I, please give me your RayID",
            self: false,
            timstamp: ""
        },
        {
            content: "89813452394",
            self: true,
            timstamp: ""
        },
        {
            content: "Jhon Champman",
            self: true,
            timstamp: ""
        },
        {
            content: "thanks, I will be in touch with you",
            self: false,
            timstamp: ""
        },
    ]
];
</script>

<template>
    <div class="flex flex-row h-screen">
        <div class="w-16 bg-gray-200">
            <PrimaryNav />
        </div>
        <div class="max-w-64">
            <SideNav />
        </div>
        <div class="flex-auto bg-blue-200">
            <MessagesSection :chat="chat"/>
        </div>
    </div>
</template>

<style scoped>
</style>
