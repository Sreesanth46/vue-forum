<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <PostList :posts="threadPost"></PostList>
    </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'

export default {
    name: 'ThreadShow',

    components: {
        PostList
    },

    props: {
        id: { required: true, type: String }
    },

    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts
        }
    },

    computed: {
        thread() {
            return this.threads.find((thread) => thread.id === this.id)
        },

        threadPost() {
            return this.posts.filter((post) => post.threadId === this.id)
        }
    }
}
</script>