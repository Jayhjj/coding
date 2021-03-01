<template>
  <h1>
      <pre>{{route}}</pre>
  </h1>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
    setup(){
        const route = useRouter()
        return{
            route
        }
    }
})
</script>

<style>

</style>