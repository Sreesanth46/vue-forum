import { createStore } from 'vuex'
import sourceData from '@/data.json';

export default createStore({
    state: sourceData,

    actions: {
        createPost(context, post) {
            post.id = 'gggg' + Math.random()
            context.commit('setPost', { post })
            context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId })
        }
    },

    mutations: {
        setPost(state, { post }) {
            state.posts.push(post)
        },

        appendPostToThread(state, { postId, threadId }) {
            const thread = state.thread.find(thread => thread.id === threadId)
            thread.posts.push(postId)
        }
    }
})