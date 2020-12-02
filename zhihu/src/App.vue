<template>
  <div class="container">
    <gobal-header :user="currentUser"></gobal-header>
    <column-list :list="list"></column-list>

  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList ,{ ColumnProps } from './components/ColumnList.vue'
import GobalHeader ,{ UserProps } from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin:true,
  name:'jay'
}
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
    
  },
   {
    id: 5,
    title: 'test5专栏',
    description: '这里是test5专栏，一段非常有意思的简介',
    
  },
   {
    id: 6,
    title: 'test6专栏',
    description: '这里是test6专栏，一段非常有意思的简介',
    
  },
  
]
export default defineComponent({
  name: 'App',

  components: {
   ColumnList,
   GobalHeader
  },
  setup(){
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>

</style>
