<template>
<h1>{{state.count}} *  2 = {{double}} </h1>
<h2>{{number}}</h2>
<button @click="add"> 增加</button>
</template>
<script>
import {reactive, computed,ref, onMounted} from 'vue'//提高treeshaking
export default {
  setup(){
    const {state,double} = useCounter(1)
    // const state = reactive({
    //   count:1
    // })
    const number = ref(2)
    function add(){
      number.value++
      state.count++
    }
    // const double = computed(() => state.count * 2)
    onMounted(()=> {
      console.log('nshhcs')
    })
    return{
      state,
      add,
      double,
      number
    }
  }
}
function useCounter(count,n){
  const state = reactive({
  count:1
  })
  const double = computed(() => state.count * 2)
  return {state,double}
}
</script>
<style scoped>

</style>