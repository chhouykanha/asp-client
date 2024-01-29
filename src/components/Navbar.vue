<template>
    <div
      class="w-full h-[65px] text-btc font-noto flex items-center justify-between p-5 text-sm md:text-base lg:text-lg"
    >
      <!-- converting english route path to khmer and apply style -->
      <div>
            <UrlDisplay />
      </div>
  
      <div class="flex items-center space-x-5 font-medium">
  
        <div class="relative" ref="dropdownProfile">
          <div
            class="flex items-center justify-center space-x-1 cursor-pointer"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary text-btcha border p-px flex items-center justify-center"
            >
               TH
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UrlDisplay from './UrlDisplay.vue';
  export default {
    components : {
      UrlDisplay
    },
    setup(_, { emit }) {
     
  
      return {
  
      };
    },
  };
  </script>
  