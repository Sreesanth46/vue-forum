<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>

            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <p>
                        <a href="#">{{ thread.title }}</a>
                    </p>
                    <p class="text-faded text-xsmall">
                        By <a href="#">{{ userById(thread.userId).name }}</a
                        >, {{ thread.publishedAt }}
                    </p>
                </div>

                <div class="activity">
                    <p class="replies-count">{{ thread.posts.length }} replies</p>

                    <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

                    <div>
                        <p class="text-xsmall">
                            <a href="#">{{ userById(thread.userId).name }}</a>
                        </p>
                        <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const posts = reactive(this.$store.state.posts)
const users = reactive(this.$store.state.users)

defineProps({
    threads: { type: Array, required: true }
})

// const props = defineProps({
// threads: { type: Array, required: true }
// })
// console.log(props.threads);

function postById(postId) {
    return posts.find((p) => p.id === postId)
}

function userById(userId) {
    return users.find((p) => p.id === userId)
}
</script>