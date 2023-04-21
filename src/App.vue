<template>
  <div>
    <div class="navbar" v-if="store.login">
      <el-menu :default-active="activeIndex" mode="horizontal" >
        <el-menu-item @click="dialogVisible=true" index="6" class="a">信望值</el-menu-item>
        <el-menu-item index="5"><RouterLink to="/home" class="a">主頁</RouterLink></el-menu-item>
        <el-menu-item index="1" ><RouterLink to="/bag" class="a">背包</RouterLink></el-menu-item>
        <el-menu-item index="2"><RouterLink to="/clue" class="a">線索</RouterLink></el-menu-item>
        <el-menu-item index="3"><RouterLink to="/map" class="a">NPC介紹</RouterLink></el-menu-item>
        <el-menu-item index="4"><RouterLink to="/any" class="a">其他</RouterLink></el-menu-item>
      </el-menu>
      <div class="progress-container">
        <el-dialog style="width: 24.2rem;border-radius: 10px" class="dialog" v-model="dialogVisible">
          <h1 style="justify-content: center;align-items: center;display: flex">信望值</h1>
<!--          TODO : power < 0 -> Warning (RED)-->
          <el-progress class="bar" style=" margin-top: 1.75rem" :text-inside="true" :stroke-width="32" :percentage=store.power />
        </el-dialog>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import {Ref,ref} from "vue";
import {useRouter,RouterView} from 'vue-router';
import useStore from "./store/store";
const store = useStore()
const {currentRoute} = useRouter()
const activeIndex : Ref<String> = ref<string>(currentRoute.value.path.split('/')[1])
const dialogVisible = ref(false)
if(store.power < 0){
  store.power = 0;
}
</script>

<style scoped>
.navbar {
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: relative;
}
.a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.25rem;
  width: 100%;
  height: 100%;
}



</style>
