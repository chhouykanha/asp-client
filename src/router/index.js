import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';

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
      name : 'home',
      beforeEnter : loginValid,
      component : HomeView
    },

    {
      path : '/login',
      name : 'login',
      component : LoginView
    }
  ]
})

export default router
