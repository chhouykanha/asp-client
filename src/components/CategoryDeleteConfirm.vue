<template>
    <TransitionRoot as="template" :show="true">
      <Dialog as="div" class="relative z-40" @close="handleClose">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/35 bg-opacity-80 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto cursor-move">
          <div class="flex mt-[32px] justify-center overflow-x-auto">
            <TransitionChild as="template" enter="ease-out duration-100"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform transition-all min-w-fit m-5 cursor-default">
                <div class="bg-white shadow rounded-lg border border-neutral-300 font-Poppins">
                  <div class="flex flex-shrink-0 items-center justify-between p-5 border-b border-neutral-300">
                    <h5 class="w-full flex items-center space-x-1 text-lg font-bold capitalize">
                      <span class="font-noto">បញ្ជាក់ដើម្បីលុប</span>
                    </h5>
  
                    <div @click="handleClose"
                      class="flex items-center justify-center w-7 h-7 rounded-full hover:bg-red-600 hover:text-white cursor-pointer">
                      <font-awesome-icon icon="fa fa-x" size="sm" />
                    </div>
                  </div>
  
                  <div class="flex flex-col sm:items-center justify-center px-4 my-2 font-noto font-medium">
                    <p class="text-base">
                      តើអ្នកប្រាកដថាចង់លុបវាទេ??
                    </p>
  
                    <p class=" text-base font-noto">នៅពេលដែរអ្នកលុប, វានឹងត្រូវបានលុបជារៀងរហូត</p>
                  </div>
  
                  <div class="flex justify-end items-center p-3 space-x-2">
  
                    <button @click="handleClose" type="button"
                      class="btn bg-gray-300 px-8 py-1.5 rounded-lg font-noto">
                      បិទ
                    </button>
  
                    <button type="submit" class="btn text-white bg-red-600 px-8 py-1.5 rounded-lg  font-noto"
                      @click="handleDelete(doc.id)">
                      លុប
                    </button>
  
                  </div>
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
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
  } from "@headlessui/vue";
  import axios from "axios";
  export default {
    components: {
      Dialog,
      DialogPanel,
      TransitionChild,
      TransitionRoot,
    },
    props: ["doc",],
    emits: ["onClose"],
    setup(props, { emit }) {
      const handleClose = () => {
        emit("onClose");
      };

      const handleDelete =  (id) => {
        axios.delete(`https://localhost:7113/api/Category?id=${id}`);
        handleClose();
      }
  
      return { handleDelete, handleClose };
    },
  };
  </script>
    
  <style></style>
    