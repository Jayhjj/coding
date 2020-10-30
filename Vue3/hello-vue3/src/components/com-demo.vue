<template>
     <FragmentDemo :data ="[1,2,3,4,5,6,7,8]"/>
     <hr/>
     <TeleportDemo/>
     <hr/>
     <!-- <SuspenceDemo/> -->
    <Suspense>
        <template #default>
            <AsyncComponents :timeout='3000'/> 
        </template>
        <template #fallback>
           <LoadingComponents/>
        </template>
    </Suspense>
</template>
<script>
import FragmentDemo from './fragment.vue' 
import TeleportDemo from './teleport.vue'  
import AsyncComponents from './suspence.vue'
import LoadingComponents from './loading.vue'
export default {
    components:{
        FragmentDemo,
        TeleportDemo,
        AsyncComponents,
        LoadingComponents
    }
}
</script>
<style>

</style>