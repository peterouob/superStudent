<template>
  <div class="demo-image__placeholder">

      <div v-if="!store.item14">
        <div class="img">
          <el-image @click="stone1" :src="src"  />
        </div>
      </div>

      <div class="block" v-if="!store.item26">
        <el-image @click="stone2" :src="src" />
      </div>

      <div class="block" v-if="!store.item40">
        <el-image @click="stone3" :src="src"/>
      </div>
      <div class="block" v-if="!store.item51">
        <el-image @click="stone4" :src="src"/>
      </div>
      <div class="block" v-if="!store.item63">
        <el-image @click="stone5" :src="src"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import useStore from "../store/store";
import {ElMessageBox} from "element-plus";

const store = useStore()

const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

const stone1 = ()=>{
  ElMessageBox.alert("維護世界和平的圖騰","(石板一號)未知圖騰")
}
</script>

<style scoped>
.demo-image__placeholder .block {
  padding: 12px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__placeholder .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__placeholder .el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__placeholder{
  margin-top: 5rem;
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}

.img{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
