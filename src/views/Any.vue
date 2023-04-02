<template>
  <div class="box">
    <div class="container">
      <div class="bd">
        <div class="div_1">
          <br>
          <h3>禁忌1</h3>
          <el-button @click="visible = true">
            Open Dialog with customized header
          </el-button>
        </div>

        <div class="div_2">
          <h3>禁忌2</h3>
          <el-button @click="visible2 = true">
            Open Dialog with customized header
          </el-button>
        </div>

      </div>
      <div>
        <el-dialog v-model="visible" :show-close="false">
          <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
              <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
              <el-button type="danger" @click="close">
                <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                Close
              </el-button>
            </div>
          </template>
          This is dialog content.
        </el-dialog>
      </div>
      <br>
      <el-dialog v-model="visible2" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
          <div class="my-header">
            <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
            <el-button type="danger" @click="close">
              <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
              Close
            </el-button>
          </div>
        </template>
        This is dialog content.
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
const visible2 = ref(false)
</script>

<style scoped>
.box{
  position: relative;
}

.container{
  position: absolute;
  top: 50%;
  left: 20%;
}

.div_1{
  margin-bottom: 5rem;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


</style>
