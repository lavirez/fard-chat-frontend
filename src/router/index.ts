import { createRouter, createWebHistory } from 'vue-router'

const routes = [ 
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue')
    },

    {
      path: '/chat/:id',
      name: 'chat-detail',
      component: () => import('../views/ChatView.vue')
    },

    {
      path: '/chat/list',
      name: 'chat-list',
      component: () => import('../views/ChatListView.vue')
    },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
