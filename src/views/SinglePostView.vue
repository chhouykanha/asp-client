 <template>
    <div class="container">
        <div class="space-y-5 rounded-lg bg-btcha">

            <!-- <td>{{ post.categoryName }}</td> -->
        
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import PostModal from '@/components/PostModal.vue';
import { Notivue, Notifications, push } from 'notivue'
import axios from 'axios';
import { onMounted,ref } from 'vue';
import moment from 'moment';
export default {
    setup(){
        const posts = ref([]);
    const post = ref(null); 
    const currentCompponent = ref('');
    
    const getPosts = (id) => {
            axios.get(`https://localhost:7113/api/Post?id=${id}`)
                .then(function (response) {
                    // handle success
                    posts.value = response.data;
                    console.log(posts.value);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
             })
        }

        const route = useRoute();
        console.log(route.params.id)
        onMounted(() => {
            getPosts(route.params.id)
        })
    } 
}

       
</script>

<style>

</style>

