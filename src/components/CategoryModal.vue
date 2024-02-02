
<template>
    <TransitionRoot appear :show="true" as="template">
      <Dialog as="div" @close="handleCloseModal" class="relative z-40 font-noto">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/35" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center">
                  <span class="text-xl md:text-2xl">{{ doc ? 'កែប្រែប្រភេទអត្ថបទ' : 'បន្ថែមប្រភេទអត្ថបទថ្មី' }}</span>
                  <span @click="handleCloseModal" class="text-red-600 cursor-pointer">
                    <font-awesome-icon size="lg" icon="fa-solid fa-circle-xmark" />
                  </span>
                </DialogTitle>
                <div class="mt-2">
                  <form @submit.prevent="handleAddCategory"
                    class="grid grid-cols-1 gap-5 mt-8 lg:ml-5">
                    <div>
                      <label for="input-name" class="block text-sm md:text-base lg:text-lg font-medium mb-2">ឈ្មោះ<span class="text-red-500">*</span></label>
                      <input v-model="name" type="text" id="input-name"
                        class="block border-2 py-3 px-4 w-full rounded-lg border-gray-400 border-transparent text-sm md:text-base lg:text-lg focus:outline-none  focus:border-primary"
                        placeholder="បញ្ចូលឈ្មោះប្រភេទអត្ថបទ" required />
                    </div>

                    <div class="space-x-2 flex justify-start items-center text-sm md:text-base lg:text-lg">
                      <Switch v-model="status" :class="status ? 'bg-primary' : 'bg-gray-200'"
                        class="relative inline-flex h-6 w-11 items-center rounded-full">
                        <span :class="status ? 'translate-x-6' : 'translate-x-1'"
                          class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                      </Switch>
  
                      <span>{{ status ? 'ដំណើរការ' : 'មិនដំណើរការ' }}</span>
  
                    </div>
                    <div class="flex justify-end items-center">
                      <button type="submit" class="btn btn-primary px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">
                        {{ doc ? 'កែប្រែ' : 'រក្សាទុក' }}
                      </button>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  <script>
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Switch
  } from "@headlessui/vue";
  import {onMounted, ref} from 'vue';
  import moment from 'moment';
  import axios from 'axios';
  export default {
    props : ["doc"],
    emits: ["closeModal", "emitAddCategory", "emitUpdateCategory"],
    components: {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
      Switch
    },
  
    setup(props, { emit }) {
      const name = ref('');
      const status = ref(true);
      const categories = ref([]);

      const handleCloseModal = () => {
        emit("closeModal");
      }

      const handleAddCategory = () => {
        const data = {
          CategoryName : name.value,
              Status : status.value,
        }

         if(props.doc){
            data.id = props.doc.id;
            axios.put(`https://localhost:7113/api/Category`,data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            emit("emitUpdateCategory");

         }else{
           
            axios.post('https://localhost:7113/api/Category', data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              emit("emitAddCategory");
          }
         }

      onMounted(() => {
            if(props.doc){
                 name.value = props.doc.categoryName;
                 status.value = props.doc.status;
            }
      })

  
      return {
        name,
        status,
        handleCloseModal,
        handleAddCategory
      };
    },
  }
  
  
  </script>