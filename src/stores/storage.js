import  storage  from "@/firebase/config";
import {ref as imageRef, uploadBytes , getDownloadURL, deleteObject} from "firebase/storage";
import {ref} from 'vue';


const useStorage = () => {
  const url = ref(null);
  const filePath = ref(null);
  const isPending = ref(null);

  const uploadImage = async (file) => {
     filePath.value = `images/${file.name}`;
     const storageRef = imageRef(storage, filePath.value);
     try {
      isPending.value = true;
      await uploadBytes(storageRef, file);
      url.value = await getDownloadURL(storageRef);
      isPending.value = false;
     } catch (err) {
       url.value = null;
       filePath.value = null;
       isPending.value = false;
     }
  }

  const deleteImage = async (imageURL) => {

    const storageRef = imageRef(storage, imageURL);
    try {
      isPending.value = true;
      await deleteObject(storageRef);
      isPending.value = false;
    } catch (err) {
       isPending.value = false;
    }
  }

  return {
    uploadImage,
    deleteImage,
    isPending,
    url,
  }
}

export default useStorage;