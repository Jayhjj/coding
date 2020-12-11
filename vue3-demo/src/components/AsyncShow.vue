<template>
    <!-- <h1>{{reslut}}</h1> -->
    <img :src="data.imgUrl" alt="">
</template>
<script lang="ts">
import { defineComponent} from 'vue';
import axios from 'axios'
export default defineComponent({
   async setup(){
        // return new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //         return resolve({reslut:'小姐姐来了'})
        //     },2000)
        // })
        const result = await axios.get('https://apiblog.jspang.com/default/getGirl')
        console.log(result);
        return {data: result.data}
    }
})
</script>