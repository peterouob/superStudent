<template>
  <div>
    <h1>Clue</h1>
    <el-input prop="ans" v-model="ans"></el-input>
    <el-button @click="submit">Submit</el-button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {ElMessageBox } from 'element-plus'
import {useRouter} from "vue-router";
import useStore from '../store/store'
const router = useRouter()
const ans = ref<String>("")
const store = useStore()
const submit = async()=>{
    store.userAns1 = true
    await ElMessageBox.alert('似乎獲得了什麼東西', 'Title')
    await router.push("/bag")
}

</script>
