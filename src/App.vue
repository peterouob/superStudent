<template>
  <div>
    <div class="navbar" v-if="store.login">
      <el-menu :default-active="activeIndex" mode="horizontal" >
        <h2 class="a power">信望值</h2><h2 class="a power">:{{store.power}}</h2>
        <el-menu-item index="5"><RouterLink to="/home" class="a">主頁</RouterLink></el-menu-item>
        <el-menu-item index="1" ><RouterLink to="/bag" class="a">背包</RouterLink></el-menu-item>
        <el-menu-item index="2"><RouterLink to="/clue" class="a">線索</RouterLink></el-menu-item>
        <el-menu-item index="3"><RouterLink to="/map" class="a">NPC介紹</RouterLink></el-menu-item>
        <el-menu-item index="4"><RouterLink to="/any" class="a">其他</RouterLink></el-menu-item>

      </el-menu>
    </div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import {Ref,ref} from "vue";
import {useRouter} from 'vue-router'
import useStore from "./store/store";
const store = useStore()

const {currentRoute } = useRouter()
const activeIndex : Ref<String> = ref<string>(currentRoute.value.path.split('/')[1])

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
  width: 4rem;
  height: 100%;
}
.power {
  margin-top: 0.9rem;
  color: red;
}
</style>
