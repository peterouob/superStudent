<template>

</template>

<script setup>
import {onBeforeMount} from "vue";
import {ElMessage} from "element-plus";
import useStore from "../store/store.ts";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useStore()
onBeforeMount(async()=>{
  if(store.item3 && store.item4){
    store.item5 = true;
    store.item3 = false;
    store.item4 = false;
    ElMessage.success("似乎出現了奇妙的東西")
    await router.push("/bag")
  }else{
    ElMessage.error("好像還有問題")
    await router.push("/bag")
  }
})
</script>

<style scoped>

</style>