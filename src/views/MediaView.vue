<template>
        <div class="container">
            <div class="space-y-5 rounded-lg bg-btcha">
                <div class="text-hd2 font-bold text-sm md:text-lg lg:text-xl">រូបភាពទាំងអស់</div>
                <div class="grid grid-cols-4 gap-5">
               
                        <div v-for="post in posts" :key="post">
                            <img :src="post.imageUrl" alt="" class="w-full object-cover object-center h-72 " data-action="zoom">
                        </div>
                </div>
            </div>
        </div>
</template>

<script>
import {ref} from "vue";
import { onMounted } from 'vue';
import axios from 'axios';
export default {
    setup (){
        const posts =ref([])
        const getPosts = () => {
            axios.get('https://localhost:7113/api/Post')
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
        onMounted(() => {
            getPosts();
        });
        return{
            posts,
        }
    }

}
</script>

<style>

</style>