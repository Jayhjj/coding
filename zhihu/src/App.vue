<template>
  <div class="container">
    <gobal-header :user="currentUser"></gobal-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action>
    <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <vaildate-input :rules="emailRules"></vaildate-input> 
        <!-- 给 ValidateInput组件的rules数组传值 -->
    </div>
    </form>
    <!-- <form action>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input 
          type="text" class="form-control" id="exampleInputEmail1" 
          v-model ="emailRef.val"
          @blur ="vaildateEmail"
        />
        <div class="form-text" v-if="emailRef.error">{{ emailRef.message }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
    </form> -->
  </div>
</template>

<script lang = 'ts'>
import { defineComponent,reactive } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import VaildateInput ,{ RulesProp } from './components/ValidateInput.vue'
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
    VaildateInput
  },
  setup() {
    const emailRules: RulesProp = [
      {type: 'require' ,message: '电子邮件地址不能为空'},
      {type: 'email' ,message: '请输入正确的电子邮箱格式'}
    ]
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
      emailRules
    };
  }
});
</script>

<style>
</style>
