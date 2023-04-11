import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import sourceData from '@/data.json'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome
	},

	{
		path: '/thread/:id',
		name: 'ThreadShow',
		component: PageThreadShow,
		props: true,
		beforeEnter(to, from, next) {
			const threadExist = sourceData.threads.find(thread => thread.id === to.params.id);

			if (threadExist) {
				return next();
			} else {
				next({
					name: 'NotFound',
					params: { pathMatch: to.path.substring(1).split('/') }, // substring removes extra slash(/) in the url
					// keep query and hash
					query: to.query,
					hash: to.hash
				})
			}
		}
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: PageNotFound,
		props: true,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
