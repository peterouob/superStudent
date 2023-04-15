<template>
  <div class="container">
    <el-image v-if="!store.item1"  @click="talk1" class="img" :src="src" />
    <el-image v-if="!store.item2"  @click="talk2" class="img" :src="src" />
    <el-image  v-if="!store.item3" @click="talk3" class="img" :src="src" />
    <el-image  v-if="!store.item4" @click="talk4" class="img" :src="src" />
    <el-image v-if="!store.item5" @click="talk5" class="img" :src="src" />
    <el-image  v-if="!store.item6" @click="talk6" class="img" :src="src" />
    <el-image  v-if="!store.item7" @click="talk7" class="img" :src="src" />
    <el-image  v-if="!store.item8" @click="talk8" class="img" :src="src" />
    <el-image  v-if="!store.item9" @click="talk9"  class="img" :src="src" />
    <el-image  v-if="!store.item10" @click="talk10" class="img" :src="src" />
    <el-image  v-if="!store.item11" @click="talk11" class="img" :src="src" />
    <el-image  v-if="!store.item12" @click="talk12" class="img" :src="src" />
    <el-image  v-if="!store.item13" @click="talk13" class="img" :src="src" />
    <el-image  v-if="!store.item15" @click="talk15" class="img" :src="src" />
    <el-image  v-if="!store.item16" @click="talk16" class="img" :src="src" />
    <el-image  v-if="!store.item17" @click="talk17"  class="img" :src="src" />
    <el-image  v-if="!store.item18" @click="talk18" class="img" :src="src" />
    <el-image  v-if="!store.item19" @click="talk19" class="img" :src="src" />
    <el-image  v-if="!store.item20" @click="talk20" class="img" :src="src" />
    <el-image  v-if="!store.item21" @click="talk21" class="img" :src="src" />
    <el-image  v-if="!store.item22" @click="talk22" class="img" :src="src" />
    <el-image  v-if="!store.item23" @click="talk23" class="img" :src="src" />
    <el-image  v-if="!store.item24" @click="talk24" class="img" :src="src" />
    <el-image  v-if="!store.item25" @click="talk25"  class="img" :src="src" />
    <el-image  v-if="!store.item27" @click="talk27" class="img" :src="src" />
    <el-image  v-if="!store.item28" @click="talk28" class="img" :src="src" />
    <el-image  v-if="!store.item29" @click="talk29" class="img" :src="src" />
    <el-image  v-if="!store.item30" @click="talk30" class="img" :src="src" />
    <el-image  v-if="!store.item31" @click="talk31" class="img" :src="src" />
    <el-image  v-if="!store.item32" @click="talk32" class="img" :src="src" />
    <el-image v-if="!store.item33"  @click="talk33" class="img" :src="src" />
    <el-image v-if="!store.item34" @click="talk34"  class="img" :src="src" />
    <el-image v-if="!store.item35"  @click="talk35" class="img" :src="src" />
    <el-image v-if="!store.item36"  @click="talk36" class="img" :src="src" />
    <el-image  v-if="!store.item37" @click="talk37" class="img" :src="src" />
    <el-image  v-if="!store.item38" @click="talk38" class="img" :src="src" />
    <el-image  v-if="!store.item39" @click="talk39" class="img" :src="src" />
    <el-image  v-if="!store.item41" @click="talk41" class="img" :src="src" />
    <el-image  v-if="!store.item42" @click="talk42" class="img" :src="src" />
    <el-image v-if="!store.item43" @click="talk43"  class="img" :src="src" />
    <el-image v-if="!store.item44"  @click="talk44" class="img" :src="src" />
    <el-image  v-if="!store.item45" @click="talk45" class="img" :src="src" />
    <el-image  v-if="!store.item46" @click="talk46" class="img" :src="src" />
    <el-image v-if="!store.item47"  @click="talk47" class="img" :src="src" />
    <el-image v-if="!store.item48"  @click="talk48" class="img" :src="src" />
    <el-image v-if="!store.item49"  @click="talk49" class="img" :src="src" />
    <el-image  v-if="!store.item50" @click="talk50" class="img" :src="src" />
    <el-image  v-if="!store.item52" @click="talk52" class="img" :src="src" />
    <el-image  v-if="!store.item53" @click="talk53" class="img" :src="src" />
    <el-image  v-if="!store.item54" @click="talk54" class="img" :src="src" />
    <el-image  v-if="!store.item55" @click="talk55" class="img" :src="src" />
    <el-image v-if="!store.item56" @click="talk56"  class="img" :src="src" />
    <el-image v-if="!store.item57"  @click="talk57" class="img" :src="src" />
    <el-image  v-if="!store.item58" @click="talk58" class="img" :src="src" />
    <el-image  v-if="!store.item59" @click="talk59" class="img" :src="src" />
    <el-image  v-if="!store.item60" @click="talk60" class="img" :src="src" />
    <el-image v-if="!store.item61"  @click="talk61" class="img" :src="src" />
    <el-image v-if="!store.item62"  @click="talk62" class="img" :src="src" />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {ElMessageBox } from 'element-plus'
import useStore from "../store/store";

const store = useStore()

const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
const src2 =
    'https://www.google.com.tw/url?sa=i&url=https%3A%2F%2Fwww.storm.mg%2Flifestyle%2F45332&psig=AOvVaw2l0VxD8zd_ie9JCH7R_bTC&ust=1681639763304000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjGyLfSq_4CFQAAAAAdAAAAABAE'
const dialogVisible = ref(false)

const talk1 = ()=>{
  ElMessageBox.confirm('這個道具很有料')
      .then(()=>{
          store.item1 = false
      })
}
const talk2 = ()=>{
  ElMessageBox.confirm('這個道具很有料3')
      .then(()=>{
        store.item3 = false
      })
}
const talk3 = ()=>{
  ElMessageBox.confirm('這個道具很有料3')
      .then(()=>{
        store.item3 = false
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