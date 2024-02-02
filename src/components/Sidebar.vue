<template>
    <div
      class="w-[260px] h-full font-noto transition-all duration-150 ease-linear text-sm md:text-base lg:text-lg"
    >
      <div class="h-full px-5">
        <div
          class="text-btc h-[65px] flex items-center space-x-2.5 px-2 text-hd2 font-bold"
        >
          <button
            class="py-1.5 rounded-lg focus:outline-none hover:bg-default"
          >
            <p class="text-xl">ក្រុមទី២</p>
          </button>
        </div>

        <div class="text-btc text-bts font-medium space-y-1">
            <router-link
                to="/"
                class="sidebar-element"
                :class="$route.name == 'home' && 'active'"
            >
                    <div class="w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </div>
                    <p>ទំព័រដើម</p>
            </router-link>

            <router-link
                to="/category"
                class="sidebar-element"
                :class="$route.name == 'category' && 'active'"
            >
                    <div class="w-5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                      </svg>

                    </div>
                    <p>ប្រភេទអត្ថបទ</p>
            </router-link>
            <router-link
                to="/post"
                class="sidebar-element"
                :class="$route.name == 'post' && 'active'"
            >
                    <div class="w-5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>

                    </div>
                    <p>បង្ហោះអត្ថបទ</p>
            </router-link>
            <router-link
                to="/media"
                class="sidebar-element"
                :class="$route.name == 'media' && 'active'"
            >
                    <div class="w-5">
                      <font-awesome-icon icon="fa-solid fa-images" />
                    </div>
                    <p>បញ្ជីររូបភាព</p>
            </router-link>
            <router-link
                to="/login"
                class="sidebar-element"
                :class="$route.name == 'login' && 'active'"
            >
                    <div class="w-5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                      </svg>

                    </div>
                    <p>ចាកចេញ</p>
            </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>    
  export default {
    props: [],
    setup(props, { emit }) {
      
  
      return {
      };
    },
  };
  </script>
  