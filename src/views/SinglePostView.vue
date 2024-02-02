 <template>
    <div class="container">
        <div class="space-y-5 rounded-lg bg-btcha">

            <!-- <td>{{ post.categoryName }}</td> -->
        
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import axios from 'axios';
import { onMounted,ref } from 'vue';
import moment from 'moment';
export default {
    setup(){
    const post = ref(null); 

    const getPosts = (id) => {
            axios.get(`https://localhost:7113/api/Post?id=${id}`)
                .then(function (response) {
                    // handle success
                    post.value = response.data;
                    console.log(post.value);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
             })
        }
        const route = useRoute();
        onMounted(() => {
            getPosts(route.params.id)
        })
    } 
}

       
</script>

<style>

</style>

