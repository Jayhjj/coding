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

        <!-- 给 ValidateInput组件的rules数组传值 -->
      </div>
      <template v-slot:submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import VaildateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
const currentUser: UserProps = {
  isLogin: true,
  name: "jay"
};

// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: "test1专栏",
//     description: "这里是test1专栏，一段非常有意思的简介",
//     avatar:
//       "https://img.alicdn.com/imgextra/i1/1106170053/O1CN01hZVKis1CGJayXiocs_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
//   },
//   {
//     id: 2,
//     title: "test2专栏",
//     description: "这里是test2专栏，一段非常有意思的简介",
//     avatar:
//       "https://img.alicdn.com/imgextra/i1/1106170053/O1CN01hZVKis1CGJayXiocs_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
//   },
//   {
//     id: 3,
//     title: "test3专栏",
//     description: "这里是test3专栏，一段非常有意思的简介"
//   },
//   {
//     id: 4,
//     title: "test4专栏",
//     description: "这里是test4专栏，一段非常有意思的简介"
//   },
//   {
//     id: 5,
//     title: "test5专栏",
//     description: "这里是test5专栏，一段非常有意思的简介"
//   },
//   {
//     id: 6,
//     title: "test6专栏",
//     description: "这里是test6专栏，一段非常有意思的简介"
//   }
// ];
// const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
export default defineComponent({
  name: "App",

  components: {
    //  ColumnList,
    GobalHeader,
    VaildateInput,
    ValidateForm
  },
  setup() {
    const inputRef = ref<any>()
    const emailVal = ref("");
    const passwordVal = ref("");
    // ruels:{
    //   email:[],
    //   password:[]
    // }
    const emailRules: RulesProp = [
      { type: "require", message: "电子邮件地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];
    const passwordRules: RulesProp = [
      { type: "require", message: "密码不能为空" }
      
    ];
    const onFormSubmit = (result: boolean) => {
      console.log('result',inputRef.value.vaildateInput())
      // console.log('1234',result)
    }
    // const emailRef = reactive({
    //   val:'',
    //   error:false,
    //   message:''
    // })
    // const vaildateEmail = () => {

    //   if(emailRef.val.trim() === ''){
    //     emailRef.error = true
    //     emailRef.message = 'can not empty'
    //   }else if(!emailReg.test(emailRef.val)){
    //     emailRef.error = true
    //     emailRef.message = 'should be vaild message'
    //   }
    // }
    return {
      // list: testData,
      currentUser,
      // emailRef,
      // vaildateEmail
      emailRules,
      emailVal,
      passwordRules,
      onFormSubmit,
      inputRef
    };
  }
});
</script>

<style>
</style>
