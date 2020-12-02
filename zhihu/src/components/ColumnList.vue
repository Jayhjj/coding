<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="cart h-100 shadow-sm">
        
        <div class="card-body text-center">
        <img :src="column.avatar" :alt="column.title"  class="rounded-circle border border-light w-25 my-3"/>
          <h5 class="cart-title">{{column.title}}</h5>
          <p class="cart-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, PropType, computed } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const lists = props.list
      const columnList = computed(() => {
          if (lists) {
            return lists.map(column => {
              if(column && !column.avatar){
                  column.avatar = require('@/assets/store.png')
              }
              return column
          })
          }
      })
      return{
        columnList
      }
  }
})
</script>