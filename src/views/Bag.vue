<template>
  <div class="container">
    <el-image v-if="store.item1"  @click="talk1" class="img" :src="src" />
    <el-image  @click="talk2" class="img" :src="src" />
    <el-image  @click="talk3" class="img" :src="src" />
    <el-image  @click="talk4" class="img" :src="src" />
    <el-image  @click="talk5" class="img" :src="src" />
    <el-image  @click="talk6" class="img" :src="src" />
    <el-image  @click="talk7" class="img" :src="src" />
    <el-image  @click="talk8" class="img" :src="src" />
    <el-image @click="talk9"  class="img" :src="src" />
    <el-image  @click="talk10" class="img" :src="src" />
    <el-image  @click="talk11" class="img" :src="src" />
    <el-image  @click="talk12" class="img" :src="src" />
    <el-image  @click="talk13" class="img" :src="src" />

    <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {ElMessageBox } from 'element-plus'
import useStore from "../store/store";
const store = useStore()
const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

const dialogVisible = ref(false)

const talk1 = ()=>{
  ElMessageBox.confirm('這個道具很有料')
      .then(()=>{
          store.item1 = false
      })
}
</script>

<style scoped>
.container {
  overflow: hidden;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.container .img {
  float: left;
  max-width: 25%;
  height: auto;
  padding: 5px;
  box-sizing: border-box;
}
@media screen and (max-width: 700px) {
  .container{
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .container .img{
    float: left;
    max-width: 33.3rem;
    height: auto;
    box-sizing: border-box;
  }
}
</style>