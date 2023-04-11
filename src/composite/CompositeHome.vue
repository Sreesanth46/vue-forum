<template>
    <div v-for="thread in threads" :key="thread.id">
        <h2>{{ thread.title }}</h2>
        <div v-for="postId in thread.posts" :key="postId">
            <p>{{ userById(postById(postId).userId).name }}</p>
            <p>{{ postById(postId).text }}</p>
        </div>
    </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue'
// import { ref } from 'vue'

const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)
// const posts = ref(sourceData.posts)

// function postById(postId) {
//     return posts.value.find((p) => p.id === postId)
// }

function postById(postId) {
    return posts.find((p) => p.id === postId)
}

function userById(userId) {
    return users.find((p) => p.id === userId)
}
</script>