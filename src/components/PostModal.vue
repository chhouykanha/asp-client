
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
                class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center">
                  <span class="text-xl md:text-2xl">{{ doc ? 'កែប្រែប្រភេទអត្ថបទ' : 'បន្ថែមប្រភេទអត្ថបទថ្មី' }}</span>
                  <span @click="handleCloseModal" class="text-red-600 cursor-pointer">
                    <font-awesome-icon size="lg" icon="fa-solid fa-circle-xmark" />
                  </span>
                </DialogTitle>
                <div class="mt-2">
                  <form @submit.prevent="handleAddPost"
                    class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 lg:ml-5">
                    <div>
                      <label for="input-name" class="block text-sm md:text-base lg:text-lg font-medium mb-2">ចំណងជើង<span class="text-red-500">*</span></label>
                      <input v-model="name" type="text" id="input-name"
                        class="block border-2 py-3 px-4 w-full rounded-lg border-gray-300 border-transparent text-sm md:text-base lg:text-lg focus:outline-none  focus:border-primary"
                        placeholder="បញ្ចូលឈ្មោះប្រភេទអត្ថបទ" required />
                    </div>
                    <div>
                      <label for="input-name" class="block text-sm md:text-base lg:text-lg font-medium mb-2">ប្រភេទ<span class="text-red-500">*</span></label>
                      <select
                       class="block border-2 py-3 px-4 w-full bg-white rounded-lg border-gray-300 border-transparent text-sm md:text-base lg:text-lg focus:outline-none  focus:border-primary"
                      >
                          <option value="">ជ្រើសរើសប្រភេទ</option>
                      </select>
                    </div>

                    <div>
                      <label for="input-name" class="block text-sm md:text-base lg:text-lg font-medium mb-2">សង្ខេប<span class="text-red-500">*</span></label>
                      <textarea placeholder="បញ្ចូលអត្ថបទសង្ខេប" class="block border-2 py-3 px-4 w-full rounded-lg border-gray-300 border-transparent text-sm md:text-base lg:text-lg focus:outline-none  focus:border-primary"></textarea>
                    </div>

                
                      <div>
                          <label
                              class="block text-base font-medium mb-2 cursor-pointer">បញ្ចូលរូបភាព*</label>
                          <div v-if="!image.src">
                              <label @change="handleInsertImage">
                                  <div
                                      class="flex items-center justify-center bg-neutral-300 h-20 text-sm cursor-pointer">
                                      Upload image
                                  </div>

                                  <input type="file" class="hidden" />
                              </label>
                            </div>

                            <div v-else>
                              <div class="relative group w-full flex justify-center overflow-hidden">
                                  <img class="w-24 h-24 object-cover object-center p-px border cursor-text"
                                      :src="image.url ? image.url : image.src" alt="" />
                                  <span @click="handleRemoveImage(index)"
                                      class="cursor-pointer absolute top-1 right-1 bg-red-600 text-white hover:shadow hover:border w-5 h-5 rounded-full flex items-center justify-center">
                                      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                  </span>
                              </div>
                            </div>

                      </div>

                      <div class="col-span-2">
                            <CustomCkEditor @onListenToData="getDataFromCkEditor"/>
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
  import CustomCkEditor from '@/components/CustomCkEditor.vue';
  export default {
    props : ["doc"],
    emits: ["closeModal", "emitAddPost", "emitUpdatePost"],
    components: {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
      Switch,
      CustomCkEditor
    },
  
    setup(props, { emit }) {
      const title = ref('');
      const category = ref('');
      const summary = ref('');
      const content = ref('');
      const status = ref(true);
      const createdAt = ref(moment(new Date()).format('MM/DD/YYYY'));

      const image = ref({});
      const files = ref([]);
      const fileError = ref("");
      const imageFile = ref(null);
        
      const types = ["image/png", "image/jpg", "image/jpeg", "image/svg"];

      const handleInsertImage = (e) => {
            const limitedMB = 1048576; //1MB
            const selected = e.target.files[0];
            if (selected?.size > limitedMB) {
                fileError.value = `Size of the image must be less than 1MB.`;
                files.value = [];
            } else {
                if (selected && types.includes(selected.type)) {
                    image.value = {
                        name: selected.name,
                        src: URL.createObjectURL(selected),
                    };
                    files.value.push(selected);
                    fileError.value = null;
                } else {
                    fileError.value = `Only file of type jpg, jpeg, png, and svg.`;

                    files.value = [];
                }
            }

            imageFile.value = selected;

        };
        const handleRemoveImage = () => {
            image.value = {};
            files.value = [];
        }




      const handleCloseModal = () => {
        emit("closeModal");
      }

      const handleAddPost = () => {
         if(props.doc){
            emit("emitUpdatePost", { 
              title : title.value,
              category : category.value,
              summary : summary.value,
              content : content.value,
              status : status.value,
              createdAt : createdAt.value
            });

         }else{
            const data = {
              id : Math.random(),
              title : title.value,
              category : category.value,
              summary : summary.value,
              content : content.value,
              status : status.value,
              createdAt : createdAt.value
            }
            emit("emitAddPost", data);
          }
         }
        
      const getDataFromCkEditor = (data) => {
          content.value = data
          console.log(content.value);
      }

      onMounted(() => {
            if(props.doc){
                 title.value = props.doc.name;
                 category.value = props.doc.category;
                 summary.value = props.doc.summary;
                 content.value = props.doc.content;
                 status.value = props.doc.status;
            }
      })

  
      return {
        title,
        category,
        summary,
        content,
        status,
        image,
        fileError,
        handleInsertImage,
        handleRemoveImage,
        handleCloseModal,
        handleAddPost,
        getDataFromCkEditor
      };
    },
  }
  
  
  </script>