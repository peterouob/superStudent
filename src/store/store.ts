import {defineStore} from "pinia";

const useStore = defineStore('statId',{
    state:()=>{
      return{
          userAns1 :  false,
      }
    },
})

export default useStore