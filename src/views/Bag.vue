<template>
  <div class="demo-image__placeholder">

    <div>
      <h2 style="align-items: center; display: flex;justify-content: center">最終道具</h2>
      <div class="img">
        <el-image :src="src"  />
      </div>
    </div>

    <div class="block" v-if="store.userAns1">
      <span class="demonstration">道具1</span>
      <el-image :src="src" />
    </div>

    <div class="block">
      <span class="demonstration">道具2</span>
      <el-image :src="src"/>
    </div>
    <div class="block">
      <span class="demonstration">道具3</span>
      <el-image :src="src"/>
    </div>
    <div class="block">
      <span class="demonstration">道具4</span>
      <el-image :src="src"/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import useStore from "../store/store";
const store = useStore()
const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}

.img{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
