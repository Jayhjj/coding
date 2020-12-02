<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{ display:'block'}" v-if="isOpen">
        <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
export default defineComponent({
    name:'Dropdown',
    props:{
        title:{
            type:String,
            required:true
        }
    },
    setup(){
        const isOpen = ref(false)
        const dropdownRef = ref< null | HTMLElement>(null)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        //优化下拉列表，只要下拉列表为true,点击页面任何地方把它变为false，收回去
        const handler = (e:MouseEvent) => {
            if(dropdownRef.value){
                console.log(dropdownRef.value)
                if(!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {//类型断言成为HTMLElement
                    isOpen.value = false
                }//判断是否包含其他节点(下拉节点)
            }
        }
        onMounted(() => {
            document.addEventListener('click',handler)
        })
        onUnmounted(() => {
             document.removeEventListener('click',handler)
        })
        return{
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
});
</script>
