import {defineStore} from "pinia";

const useStore = defineStore('statId',{
    persist:true,
    state:()=>{
        return{
            login:false,
            userAns1:false,
            power:0,
            item1:true,
        }
    }
})

export default useStore

//userAns1