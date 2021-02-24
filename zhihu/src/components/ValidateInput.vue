<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{'is-invalid':inputRef.error}"
      :value="inputRef.val"
      @blur="vaildateInput"
      @input="updateValue"
      v-bind="$attrs"
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
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props,context) {
    console.log(context.attrs);
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ""
    });
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue',targetValue)

    }
    const vaildateInput = () => { 
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
            return allPassed
        }
        return true
    };
    return {
      inputRef,
      vaildateInput,
      updateValue
    };
  }
});
</script>