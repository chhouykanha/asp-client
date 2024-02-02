import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue';
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import CategoryView from '@/views/CategoryView.vue';
import PostView from '@/views/PostView.vue';
<<<<<<< HEAD
import SinglePostView from '@/views/SinglePostView.vue';
=======
import MediaView from '@/views/MediaView.vue';
>>>>>>> 08002a8d2fe8098790129f9a688ab0ad5eb7e6b3

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
<<<<<<< HEAD
            path : '/post/:id',
            name : 'single-post',
            component : SinglePostView
=======
            path : '/media',
            name : 'media',
            component : MediaView
>>>>>>> 08002a8d2fe8098790129f9a688ab0ad5eb7e6b3
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
