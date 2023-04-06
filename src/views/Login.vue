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

        <el-form-item label="組別代碼" prop="code" class="code">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>

        <el-form-item label="" prop="">
          <el-button @click="submitForm(relFormRef)" class="el-button">進入</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive,ref} from "vue";
import type {FormInstance,FormRules} from "element-plus";
import { InternalRuleItem } from 'async-validator/dist-types/interface'
import {useRouter} from "vue-router"

const relFormRef = ref<FormInstance>()
const router = useRouter()
const error = ref<Error>()
const validTeam = (rule : InternalRuleItem,value:string,callback:(error?:string|Error|undefined)=>void)=>{
  if(value === ""){
    callback(new Error('請輸入隊伍名稱'))
  }
}
const validCode = (rule :InternalRuleItem,value:string,callback:(error?:string|Error|undefined)=>void)=>{
  if(value === ""){
    callback(new Error('請輸入隊伍代碼'))
  }
}
const ruleForm = reactive({
  team:'',
  code:''
})

const rules = reactive<FormRules>({
  team:[{validator:validTeam,trigger:'blur'}],
  code:[{validator:validCode,trigger:'blur'}]
})

const submitForm = async() => {
  try{
    if(ruleForm.team === "1" && ruleForm.code === "1"){
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
.el-button-clear{
  margin-top: 7rem;
}
</style>
