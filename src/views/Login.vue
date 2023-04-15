<template>
  <div>
    <div>
      <el-form
          class="login-form"
          :model="ruleForm"
          :rules="rules"
      >
        <el-form-item label="隊伍名稱" prop="team" class="team">
          <el-input v-model="ruleForm.team"></el-input>
        </el-form-item>

        <el-form-item label="" prop="">
          <el-button @click="submitForm" class="el-button">進入</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive,ref,onBeforeMount} from "vue";
import type {FormInstance,FormRules} from "element-plus";
import { InternalRuleItem } from 'async-validator/dist-types/interface'
import {useRouter} from "vue-router"
import useStore from "../store/store";
const store = useStore()
const relFormRef = ref<FormInstance>()
const router = useRouter()
const error = ref<Error>()
const validTeam = (rule : InternalRuleItem,value:string,callback:(error?:string|Error|undefined)=>void)=>{
  if(value === ""){
    callback(new Error('請輸入隊伍名稱'))
  }
}
onBeforeMount(()=>{
  if(store.login === true){
    router.push("/home")
  }
})
const ruleForm = reactive({
  team:'',
  code:''
})

const rules = reactive<FormRules>({
  team:[{validator:validTeam,trigger:'blur'}],
})

const submitForm = async() => {
  try{
    if(ruleForm.team === "1"){
      store.login = true;
      await router.push("/home")
    }
  }
  catch (err:any){
    error.value = err.message
    alert(error.value)
  }
}

</script>

<style scoped>
.login-form {
  width: 25rem;
  height: 20rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.team,.code{
  margin-top: 2.5rem;
}

.el-button {
  margin-top: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
}
</style>
