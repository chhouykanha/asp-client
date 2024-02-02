import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue';
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import CategoryView from '@/views/CategoryView.vue';
import PostView from '@/views/PostView.vue';
import MediaView from '@/views/MediaView.vue';

const loginValid = async (from, to, next) => {
  if (localStorage.getItem('token')){
    next();
  } else {
    next('/login');
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      beforeEnter : loginValid,
      component : DashboardView,
      children : [
         {
            path : '',
            name : 'home',
            component : HomeView
         },
         {
            path : '/category',
            name : 'category',
            component : CategoryView
         },
         {
            path : '/post',
            name : 'post',
            component : PostView
         },
         {
            path : '/media',
            name : 'media',
            component : MediaView
         }
      ]
    },

    {
      path : '/login',
      name : 'login',
      component : LoginView
    }
  ]
})

export default router
