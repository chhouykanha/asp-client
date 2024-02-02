<template>
    <div>
      <ckeditor v-model="data" :editor="editor" :config="editorConfig">
        ></ckeditor
      >
    </div>
  </template>
  
  <script>
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  
  import {ref, watch } from "vue";
  export default {
    props: ["data"],
    emits: ["onListenToData"],
    setup(props, { emit }) {

      const data = ref(null);
      
      if(props.data){
        data.value = props.data;
      }

      watch(props, () => {
        data.value = props.data;
        console.log(data.value);
      });
  
      watch(data, () => {
        emit("onListenToData", data.value);
      });
  
      return {
        data,
        editor: ClassicEditor,
        editorConfig: {
          
        },
      };
    },
  };
  </script>
  
  <style>
  .ck.ck-content {
    min-height: 200px;
  }
  </style>
  