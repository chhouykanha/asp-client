import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
export const useLoginStore = defineStore('counter', () => {
  const username = ref("super1");
  const password = ref("123456");
  const router = useRouter();

  function loginWithUsernameAndPassword(user, pass){
      if(user == username.value && pass == password.value){
         const token = '4940kkfllffkj409506058';
         localStorage.setItem('token', JSON.stringify({token : token}))
         router.push({name : 'home'});
      }
  }

  return { loginWithUsernameAndPassword }
})
