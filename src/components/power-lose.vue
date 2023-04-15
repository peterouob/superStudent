<template></template>

<script setup>
import {onBeforeMount, onMounted} from 'vue'
import useStore from "../store/store";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()
onBeforeMount(()=>{
  store.power -= 10;
})
onMounted(()=>{
  router.push("/")
})
</script>