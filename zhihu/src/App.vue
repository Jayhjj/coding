<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList ,{ ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '这里是test1专栏，一段非常有意思的简介',
    avatar: 'https://img.alicdn.com/imgextra/i1/1106170053/O1CN01hZVKis1CGJayXiocs_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这里是test2专栏，一段非常有意思的简介',
    avatar: 'https://img.alicdn.com/imgextra/i1/1106170053/O1CN01hZVKis1CGJayXiocs_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
  },
    {
    id: 3,
    title: 'test3专栏',
    description: '这里是test3专栏，一段非常有意思的简介'
  },
     {
    id: 4,
    title: 'test4专栏',
    description: '这里是test4专栏，一段非常有意思的简介',
    avatar: 'https://img.alicdn.com/imgextra/i1/1106170053/O1CN01hZVKis1CGJayXiocs_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
  }
]
export default defineComponent({
  name: 'App',

  components: {
   ColumnList
  },
  setup(){
    return {
      list: testData
    }
  }
})
</script>

<style>

</style>
