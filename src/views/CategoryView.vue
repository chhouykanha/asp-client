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
                        placeholder="ស្វែងរកតាមឈ្មោះ"
                    />
                    <!-- <button class="btn-cancel px-3">ស្វែងរក</button> -->
                    </div>

                    <div class="flex items-center space-x-3">
                    <button
                        @click.prevent="mountComponent('CategoryModal')"
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
                        <th class="min-w-[50px]">
                            <p class="text-center">ល.រ</p>
                        </th>
                        <th>
                            <p>ប្រភេទអត្ថបទ</p>
                        </th>
                        <th>
                            <p>កាលបរិច្ឆេទបង្កើត</p>
                        </th>
                        <th><p class="text-center">ស្ថានភាព</p></th>
                        <th>សកម្មភាព</th>
                        </tr>
                    </thead>

                    <tbody v-if="categories.length > 0">
                            <tr 
                                v-for="(category, i) in categories"
                                :key="i"
                                class="[&>*]:border [&>*]:p-2">
                                    <td class="text-center">{{ i+=1 }}</td>
                                    <td>{{ category.categoryName }}</td>
                                    <td>{{ formatDate(category.created) }}</td>
                                    <td class="text-center">
                                        <span :class="category.status ? 'bg-green-600' : 'bg-red-600'"
                                            class="px-1.5 p-[2px] rounded-full text-white">
                                            <span v-if="category.status" class="space-x-1">
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
                                      
                                        <button
                                            @click.prevent="handleEditCategory(category)"
                                            class="text-yellow-700 space-x-1 font-medium hover:underline whitespace-nowrap">
                                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                            <span>កែប្រែ</span>
                                        </button>
                                        <button
                                            @click.prevent="handleConfirmDelete(category)"
                                            class="text-red-600 space-x-1 font-medium hover:underline whitespace-nowrap">
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                            <span>លុប</span>
                                        </button>
                                    </td>
                            </tr>
                    </tbody>

                    <tbody v-else>
                        <tr class="[&>*]:border [&>*]:p-2 text-center">
                            <td colspan="5">មិនមានទិន្នន័យ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Notivue v-slot="item" class="font-noto text-base">
            <Notifications :item="item" />
        </Notivue>

        <component :is="currentCompponent" :doc="category" @emitAddCategory="handleAddCategory" @emitUpdateCategory="handleUpdateCategory" @onDelete="handleDeleteCategory"  @closeModal="unMountComponent" @onClose="unMountComponent" />
</template>

<script>
import { ref } from 'vue'
import CategoryModal from '@/components/CategoryModal.vue';
import CategoryDeleteConfirm from '@/components/CategoryDeleteConfirm.vue';
import { Notivue, Notifications, push } from 'notivue';
import axios from 'axios';
import moment from 'moment';
import { onMounted } from 'vue';
export default {
    components : {
        CategoryModal,
        CategoryDeleteConfirm,
        Notivue,
        Notifications
    },
    setup(){

        const categories = ref([]);
        const category = ref(null); 
        const currentCompponent = ref('');
        const getCategory = () => {
            axios.get('https://localhost:7113/api/Category')
                .then(function (response) {
                    // handle success
                    categories.value = response.data;
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
            category.value = "";
           
        }

        const handleAddCategory = () => {  
            unMountComponent();
            push.success('អ្នកបញ្ចូលបានជោគជ័យ!')
            window.location.reload();
            
        }

        const handleEditCategory = (data) => {
            category.value =data;
            mountComponent("CategoryModal");
        }

        const handleUpdateCategory = () => {
            unMountComponent();
            push.success('អ្នកកែប្រែបានជោគជ័យ!')
            window.location.reload();

        }

        const handleConfirmDelete = (data) => {
            category.value =  data;
            mountComponent("CategoryDeleteConfirm");
        }

        const handleDeleteCategory = () => {
            unMountComponent('CategoryDeleteConfirm');
            push.success('អ្នកបានលុបជោគជ័យ!')
            window.location.reload();

        }

        const formatDate = (date) => {
            return moment(date).format("dd/MM/yyyy");
        }

        

        onMounted(() => {
            getCategory()
        })    
        return{
            categories,
            currentCompponent,
            category,
            formatDate,
            mountComponent,
            unMountComponent,
            handleAddCategory,
            handleEditCategory,
            handleUpdateCategory,
            handleDeleteCategory,
            handleConfirmDelete
        }
    }
}
</script>

<style>

</style>