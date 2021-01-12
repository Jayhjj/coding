<template>
    <div class="img-verify">
        <canvas ref="verify" :width="width" :height="height"></canvas>
    </div>
</template>
<script>
import { reactive,ref, onMounted, toRefs } from 'vue'
export default {
    setup(){
        const verify = ref(null)
        const state = reactive({
            pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
            width: 120,
            height: 40,
            imgCode:''
        })
        onMounted(() => {
            state.imgCode = draw()
        })
        //随机整数函数
        const randomNum  = (min,max) => {
            return parseInt(Math.random() * (max-min) + min)
        }
        // 生成随机色
        const randomColor = (min,max) => {
            const r = randomNum(min,max)
            const g = randomNum(min,max)
            const b = randomNum(min,max)
            return `rgb(${r},${g},${b})`
        }
        // 绘制图片
        const draw = () => {
            //拿到画布
            const ctx = verify.value.getContext('2d')
            //填充背景色
            ctx.fillStyle = randomColor(180,230) 
        }
        return{
            ...toRefs(state),
            verify
        }
    }
}
</script>
<style >

</style>