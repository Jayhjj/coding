<template>
    <form class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts"> 
import { defineComponent,onUnmounted} from "vue"
import mitt, { Emitter }  from 'mitt'
type ValidateFunc = () => boolean
export const emitter: Emitter = mitt() // 这个监听器拿给validateInpute使用
export default  defineComponent({
    emits: ['form-submit'],
    setup(props,context){
        let funcArr: ValidateFunc[] = []//存放函数,执行以后可以显示错误信息，并且返回验证是否通过
        const submitForm = ():void => {
            const result = funcArr.map(func => func()).every(result => result)
            context.emit('form-submit',result)
        }
        const callback = (func?: ValidateFunc) => {
            if(func){
                funcArr.push(func)
            }
           
        }
        emitter.on('form-item-created',callback)
        onUnmounted(() => {
            emitter.off("form-item-created",callback)
            funcArr = []
        })
        return{
            submitForm
        }
    }
})
</script>