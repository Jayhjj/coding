<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>欢迎来到红浪漫洗浴中心</h1>
  <div>{{clock}}</div>
  <button @click="updateClock">上钟</button>
  <div>请选择陪您吟诗作对的小姐姐</div>
  <button v-for="(item,index) in girls" :key="index" @click="SelectGirl(index)"> {{index}}: {{item}}</button>
  <div v-if="currentGirl">您当前选择的小姐姐是 {{currentGirl}} </div> 
  <button @click="check">确认选择小姐姐</button>
  <Suspense v-if="isCheck">
    <template #default>
       <AsyncShow/>
    </template>
    <template #fallback>
      <div> 小姐姐马上就来了</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
interface DataProps{
  girls: string[];
  currentGirl: string;
  SelectGirl: (index: number) => void;
}
import { defineComponent,reactive,toRefs,Suspense,ref} from 'vue';
import {clock,updateClock} from './hooks/useClock';
import AsyncShow from './components/AsyncShow.vue'
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  
  name: 'App',
  components:{
    AsyncShow
  },
  setup(){
    // const girls= ref(['小李','小红','小陈']);
    // const currentGirl = ref('');
    // const SelectGirl = (index: number) => {
    //  currentGirl.value = girls.value[index]
    // }
    // const clock = ref('00:00:00');
    // const updateClock = () => {
    //   const nowTime = new Date();
    //   const hour = String(nowTime.getHours()).padStart(2,'0');
    //   const min = String(nowTime.getMinutes()).padStart(2,'0');
    //   const sec = String(nowTime.getSeconds()).padStart(2,'0');
    //   clock.value = hour + ":" + min + ":" + sec;
    //   setTimeout(updateClock,1000);
    // }
    const isCheck = ref(false)
    const data = reactive({
     girls:['小李','小红','小陈'],
     currentGirl:'',
     SelectGirl : (index: number) => {
        data.currentGirl = data.girls[index];
        isCheck.value = false
     }
    })
    const refData = toRefs(data)
    
    const check = () => {
      isCheck.value = true
    }
    return{
      ...refData,
      clock,
      updateClock,
      isCheck,
      check
    }
  }
  
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
