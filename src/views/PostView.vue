<template>
    <div class="container">
        <div class="space-y-5 rounded-lg bg-btcha">
            <!-- <div class="text-hd2 font-bold text-sm md:text-lg lg:text-xl">បញ្ជីឈ្មោះអតិថិជន</div> -->
            <div class="flex items-center justify-between">
                <!-- <div class="flex flex-col space-y-1">
                    <select
                        class="select-per-page text-sm md:text-base lg:text-lg"                
                    >
                        <option value="25" selected>25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                    </select>
                </div> -->

                <div class="w-[320px] flex items-center space-x-1 text-sm md:text-base lg:text-lg">
                <input
                    class="input py-2.5"
                    type="text"
                    placeholder="ស្វែងរកតាមចំណងជើង"
                />
                <!-- <button class="btn-cancel px-3">ស្វែងរក</button> -->
                </div>

                <div class="flex items-center space-x-3">
                <button
                    @click.prevent="mountComponent('PostModal')"
                    class="btn btn-primary rounded-full px-5 py-2.5 text-sm md:text-base lg:text-lg"
                >
                    <p>+ បន្ថែមថ្មី</p>
                </button>
                </div>
            </div>

        </div>

        <div class="w-full max-h-[720px] overflow-auto my-4">
            <table class="w-full text-sm md:text-base lg:text-lg">
                <thead class="font-bold border bg-default">
                    <tr class="[&>*]:border [&>*]:p-2 [&>*]:text-left">
                    <th class="min-w-[20px]">
                        <p class="text-center">ល.រ</p>
                    </th>
                    <th class="min-w-[50px]">
                        <p>រូបភាព</p>
                    </th>
                    <th>
                        <p>ប្រភេទអត្ថបទ</p>
                    </th>
                    <th>
                        <p>ចំណងជើង</p>
                    </th>
                    <th>
                        <p>កាលបរិច្ឆេទបង្កើត</p>
                    </th>
                    <th><p class="text-center">ស្ថានភាព</p></th>
                    <th>សកម្មភាព</th>
                    </tr>
                </thead>

                <tbody v-if="posts.length > 0">
                        <tr 
                            v-for="(post, i) in posts"
                            :key="i"
                            class="[&>*]:border [&>*]:p-2">
                                <td class="text-center">{{ i+=1 }}</td>
                                <td> <img class="w-12 rounded-full" :src="post.imageUrl" alt="sd"> </td>
                                <td>{{ post.categoryName }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ formatDate(post.created) }}</td>
                                <td class="text-center">
                                    <span :class="post.status ? 'bg-green-600' : 'bg-red-600'"
                                        class="px-1.5 p-[2px] rounded-full text-white">
                                        <span v-if="post.status" class="space-x-1">
                                            <font-awesome-icon icon="fa-solid fa-circle-check" />
                                            <span>ដំណើការ</span>
                                        </span>
                                        <span class="space-x-1" v-else>
                                            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
                                            <span>មិនដំណើការ</span>
                                        </span>
                                        </span>

                                </td>
                                <td class="space-x-2">
                                    <router-link
                                        :to="{name : 'single-post', params : {id : post.id}}"
                                            class="text-green-700 space-x-1 font-medium hover:underline whitespace-nowrap">
                                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                            <span>មើល</span>
                                    </router-link>

                                    <button
                                        @click.prevent="handleEditPost(post)"
                                        class="text-yellow-700 space-x-1 font-medium hover:underline whitespace-nowrap">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                        <span>កែប្រែ</span>
                                    </button>
                                    <button
                                        @click.prevent="handleConfirmDelete(post)"
                                        class="text-red-600 space-x-1 font-medium hover:underline whitespace-nowrap">
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                        <span>លុប</span>
                                    </button>
                                </td>
                        </tr>
                </tbody>

                <tbody v-else>
                    <tr class="[&>*]:border [&>*]:p-2 text-center">
                        <td colspan="7">មិនមានទិន្នន័យ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Notivue v-slot="item" class="font-noto text-base">
        <Notifications :item="item" />
    </Notivue>

    <component 
        :is="currentCompponent" 
        :doc="post" 
        @emitAddPost="handleAddPost" 
        @emitUpdatePost="handleUpdatePost"  
        @closeModal="unMountComponent" 
        @onClose="unMountComponent" 
        @onDelete="unMountComponent"
    />
</template>

<script>
import { ref } from 'vue'
import PostModal from '@/components/PostModal.vue';
import { Notivue, Notifications, push } from 'notivue'
import axios from 'axios';
import { onMounted } from 'vue';
import moment from 'moment';
import PostDeleteConfirm from '@/components/PostDeleteConfirm.vue';
export default {
components : {
    Notivue,
    Notifications,
    PostModal,
    PostDeleteConfirm
},
setup(){

    const posts = ref([]);
    const post = ref(null); 
    const currentCompponent = ref('');

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

    const mountComponent = (component) => {
        currentCompponent.value = component;
    }
    const unMountComponent = () => {
        currentCompponent.value = '';
        post.value = "";
        window.location.reload();
    }

    const handleAddPost = () => {  
        unMountComponent();
        push.success('អ្នកបញ្ចូលបានជោគជ័យ!')
    }

    const handleEditPost = (data) => {
        post.value = posts.value.find(item => item.id === data.id);
        mountComponent("CategoryModal");
    }

    const handleUpdatePost = (data) => {
        unMountComponent();
        push.success('អ្នកកែប្រែបានជោគជ័យ!')
    }

    const handleConfirmDelete = (data) => {
        post.value = data;
        mountComponent('PostDeleteConfirm');
    }

    const formatDate = (date) => {
        return moment(date).format("dd/MM/yyyy");
    }
    
    onMounted(() => {
        getPosts()
    }) 
    return{
        posts,
        currentCompponent,
        post,
        mountComponent,
        handleConfirmDelete,
        unMountComponent,
        handleAddPost,
        handleEditPost,
        handleUpdatePost,
        formatDate
    }
}
}
</script>

<style>

</style>