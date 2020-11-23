<template>
<div class="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <h1>{{greetings}}</h1>
  <h1>X:{{x}} Y:{{y}}</h1>
  <h1 v-if="loading"> Loading....</h1>
  <img v-if="loaded"  src="result.message">
  <!-- <ul>
    <li v-for="number in numbers" :key="number">
      <h1>{{number}}</h1>
    </li>
  </ul>
  <h1>{{person.name}}</h1> -->
  <button @click="increase"> +1</button></br>
  <button @click="updateGreeting"> updated title</button>
  
</div>
  
</template>

<script lang="ts">
import {computed,reactive,toRefs,ref,watch,onMounted,onUnmounted} from 'vue';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
interface DataProps{
  count: number;
  double: number;
  increase: () => void;
 
}
export default{
  name: 'App',
  setup(){
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value *2
    // })
    // const increase = () => {
    //   count.value++
    // }
    const data: DataProps = reactive({
      count :0,
      increase: () => {data.count++},
      double:computed(() => data.count * 2),
    
    })
    const greetings = ref('')
    const updateGreeting = () => {
      greetings.value += 'Hello!'
    }
    const { x , y } = useMousePosition()
    const {result,loaded,loading} = useURLLoader('https://dog.ceo/api/breeds/image/random')
    // const x = ref(0);
    // const y = ref(0);
    // const updateMouse = (e:MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(() => {
    //   document.addEventListener('click',updateMouse)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click',updateMouse)
    // })
    // watch([greetings,data],(newValue,oldValue) => {
    //   console.log(oldValue);
    //   console.log(newValue);
    //   document.title = 'updated' + greetings.value + data.count
    // })
      watch([greetings,() => data.count],(newValue,oldValue) => {
      console.log(oldValue);
      console.log(newValue);
      document.title = 'updated' + greetings.value + data.count
    })
    
    const refData = toRefs(data)
    refData.double
    return {
     ...refData,
     greetings,
     updateGreeting,
     x,
     y,
     result,
     loaded,
     loading
    }
  },

  
};
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
