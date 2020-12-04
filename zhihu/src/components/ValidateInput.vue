<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{'is-invalid':inputRef.error}"
      v-model="inputRef.val"
      @blur="vaildateEmail"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
interface RuleProp {
  type: "require" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup(props) {
    const inputRef = reactive({
      val: "",
      error: false,
      message: ""
    });
    const vaildateEmail = () => { 
        const rules1 = props.rules;
        if(rules1){  //rules里面的每一个rule都必须通过
            const allPassed = rules1.every(rule => { //这个方法返回的是一个boolean值，每一项返回true的时候等于true，只要有一项为false则为false，并立即停止循环
                let passed = true
                inputRef.message = rule.message
                switch(rule.type){
                    case'require':
                        passed = (inputRef.val.trim() !== '')
                        break
                    case 'email':
                        passed = emailReg.test(inputRef.val)
                        break
                    default:
                        break
                }
                return passed
            })
            inputRef.error = !allPassed //只要没通过就为false
        }
    };
    return {
      inputRef,
      vaildateEmail
    };
  }
});
</script>