<template>
    <div class="navbar" >
      <el-menu :default-active="activeIndex" mode="horizontal" >
        <el-menu-item index="5"><RouterLink to="/home" class="a">主頁</RouterLink></el-menu-item>
        <el-menu-item index="1" ><RouterLink to="/bag" class="a">背包</RouterLink></el-menu-item>
        <el-menu-item index="2"><RouterLink to="/clue" class="a">線索</RouterLink></el-menu-item>
        <el-menu-item index="3"><RouterLink to="/map" class="a">地圖</RouterLink></el-menu-item>
        <el-menu-item index="4"><RouterLink to="/any" class="a">其他</RouterLink></el-menu-item>
      </el-menu>
    </div>
  <RouterView/>
</template>

<script setup lang="ts">
import {Ref,ref} from "vue";
import {RouterView,RouterLink,useRouter} from 'vue-router'

const {currentRoute } = useRouter()

const activeIndex : Ref<String> = ref<string>(currentRoute.value.path.split('/')[1])
</script>

<style scoped>
.navbar {
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.25rem;
  width: 4rem;
  height: 100%;
}
</style>
