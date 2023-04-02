<script setup lang="ts">
import PrimaryNav from "../components/PrimaryNav.vue";
import SideNav from "../components/SideNav.vue";
import MessagesSection from "../components/MessagesSection.vue";

// fetch chat object with messages
// if chat is empty find show no conversation selected
// in the chatDetail Component 
// const chat:Object = {};
const chat = {
    id: "#skj-jsd23",
    end_user: {
        id: "#sdl034fsdkldfspd9fg80sdsdfgsfi-sdfgsdf",
        first_name: "Alireza",
        last_name: "Tafreshi",
        image: "",
    },
    messages: [
        {
            content: "hello there",
            self: true,
            timstamp: "",
            seen: true,
            last: false,
        },
        {
            content: "I am from Join Champet from so you can hell it to the next level of the projec",
            self: true,
            timstamp: "",
            seen: true,
            last: false,
        },
        {
            content: "Hey there how are you doing friend",
            self: false,
            timstamp: "",
            seen: true,
            last: false,
        },
        {
            content: "oh yeah I, please give me your RayID",
            self: false,
            timstamp: "",
            seen: true,
            last: false,
        },
        {
            content: "89813452394",
            self: true,
            timstamp: "",
            seen: true,
            last: false,
        },
        {
            content: "Jhon Champman",
            self: true,
            timstamp: "",
            seen: true,
            last: false,
        },
        {
            content: "thanks, I will be in touch with you",
            self: false,
            timstamp: "",
            seen: false,
            last: true,
        },
    ]
};
</script>

<template>
    <div class="flex flex-row h-screen">
        <div class="w-16 bg-gray-200">
            <PrimaryNav />
        </div>
        <div class="lg:w-1/4 md:w-2/6 hidden md:block bg-gray-50 border-1 border-slate-500 rounded-lg shadow-lg">
            <SideNav />
        </div>
        <div class="flex flex-col flex-auto shadow-lg rounded-sm">
            <MessagesSection :chat="chat"/>
        </div>
    </div>
</template>

