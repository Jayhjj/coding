<template>
  <div class="container">
    <gobal-header :user="currentUser"></gobal-header>
    <!-- <column-list :list="list"></column-list> -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <vaildate-input 
          :rules="emailRules" 
          v-model="emailVal" 
          placeholder="请输入邮箱地址" 
          type="text" 
          ref="inputRef"
        />

        <!-- 给 ValidateInput组件的rules数组传值 -->
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <vaildate-input
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        />
         <div class="form-text">
          <a href="/signup" class="">还没有账户？去注册一个新的吧！</a>
        </div>
        <!-- 给 ValidateInput组件的rules数组传值 -->
      </div>
      <template v-slot:submit>
       <button type="submit" class="btn btn-primary btn-block btn-large w-100">登录</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter} from 'vue-router'
import VaildateInput, {RulesProp} from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
export default defineComponent({
  name: "Login",

  components: {
    VaildateInput,
    ValidateForm
  },
  setup() {
    const emailVal = ref('');
    // ruels:{
    //   email:[],
    //   password:[]
    // }
    const emailRules: RulesProp = [
      { type: "require", message: "电子邮件地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];
    const passwordVal = ref('');
    const passwordRules: RulesProp = [
      { type: "require", message: "密码不能为空" }
      
    ];
    const router = useRouter()
    const onFormSubmit = (result: boolean) => {
    //   console.log('result',result)
      // console.log('1234',result)
      if(result){
         const payload = {
            email: emailVal.value,
            password: passwordVal.value
         }
      }
    }
    return {
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
    };
  }
});
</script>

<style scoped>
.w-330 {
  max-width: 330px;
}
.btn-block{
  width: 100%;
  display: block;
}
</style>