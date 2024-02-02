import './assets/app.css'

// Fontawesome Icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createNotivue } from 'notivue'

import CKEditor from '@ckeditor/ckeditor5-vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "zoom-vanilla.js/dist/zoom.css"
import "zoom-vanilla.js/dist/zoom-vanilla.min.js" 

import { faTrash, faPenToSquare,faImages, faCircleCheck, faCircleXmark, faUser,faWallet,faCircleArrowRight, faTags, faParagraph} from "@fortawesome/free-solid-svg-icons";
import {faImage} from '@fortawesome/free-regular-svg-icons';
library.add(
    faTrash,
    faImages,
    faPenToSquare,
    faCircleCheck,
    faCircleXmark,
    faUser,
    faWallet,
    faCircleArrowRight,
    faTags,
    faParagraph,
    faImage
)

const notivue = createNotivue({
    position: 'top-center',
    limit: 1,
    enqueue: false,
    notifications: {
      global: {
        duration: 3000
      }
    }
  })
 
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(CKEditor)
app.use(notivue)
app.use(createPinia())
app.use(router)

app.mount('#app')
