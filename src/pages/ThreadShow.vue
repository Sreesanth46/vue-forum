<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <PostList :posts="threadPost" />

        <PostEditor @save="addPost" />
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

export default {
    name: 'ThreadShow',

    components: {
        PostList,
        PostEditor
    },

    props: {
        id: { required: true, type: String }
    },

    computed: {
        threads() {
            return this.$store.state.threads
        },

        posts() {
            return this.$store.state.posts
        },

        thread() {
            return this.threads.find((thread) => thread.id === this.id)
        },

        threadPost() {
            return this.posts.filter((post) => post.threadId === this.id)
        }
    },

    methods: {
        addPost(eventData) {
            const post = {
                ...eventData.post,
                threadId: this.id
            }
            this.$store.dispatch('createPost', post)
        }
    }
}
</script>