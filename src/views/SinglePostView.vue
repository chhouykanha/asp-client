 <template>
    <div class="container">
        <div class="space-y-5 rounded-lg bg-btcha">

                <td>{{ post }}</td>
        
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
    const id = ref(null);

        const route = useRoute();
       
        onMounted(() => {
            id.value = route.params.id;
            axios.get(`https://localhost:7113/api/Post/${id.value}`)
                .then(function (response) {
                    // handle success
                    post.value = response.data;
                    console.log(post.value);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
             })
        })
        return {
            post,

        }
    } 
}

       
</script>

<style>

</style>

