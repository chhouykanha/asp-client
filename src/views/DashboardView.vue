<template>
    <div class="flex flex-col h-screen ">
      <div class="flex flex-grow bg-default p-5 pl-0 overflow-auto">
        <div class="hidden-print bg-primary-light">
          <SideBar />
        </div>
  
        <div class="w-full h-full flex flex-col space-y-5 min-w-[999px]">
          <div class="w-full bg-btcha rounded-lg hidden-print">
            <NavBar  />
          </div>
  
          <div class="font-noto">
            <router-view/>
          </div>
  
          <div class="hidden-print">
       
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "../components/Navbar.vue";
  import SideBar from "../components/Sidebar.vue";
  import { ref, onMounted } from "vue";
  // import { useRouter } from "vue-router";
  
  export default {
    name: "AdminDashboard",
    inheritAttrs: false,
    components: {
      NavBar,
      SideBar,
    },
    setup() {
     
    },
  };
  </script>
  