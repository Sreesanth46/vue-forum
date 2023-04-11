<template>
    <h1>Welcome to the forum</h1>
    <ThreadList />
</template>

<script>
import sourceData from '@/data.json'

export default {
    props: {
        id: { required: true, type: String }
    },

    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users
        }
    },

    computed: {
        thread() {
            return this.threads.find((thread) => thread.id === this.id)
        }
    },

    methods: {
        postById(postId) {
            return this.posts.find((p) => p.id === postId)
        },

        userById(userId) {
            return this.users.find((p) => p.id === userId)
        }
    }
}
</script>