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
import { reactive } from 'vue'
// import { ref } from 'vue'

const threads = reactive(this.$store.state.threads)
const posts = reactive(this.$store.state.posts)
const users = reactive(this.$store.state.users)
// const posts = ref(this.$store.state.posts)

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