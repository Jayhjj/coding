<template>
   <div class="home-page container-md">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <router-link to="/create" class="btn btn-primary my-2">开始写文章</router-link>
          </p>
        </div>
      </div>
    </section>
     <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list ></column-list>
   </div>
</template>

<script>
import { defineComponent, computed} from 'vue'
import ColumnList from '../components/ColumnList.vue'
export default defineComponent({
    name:'Home',
    components:{
        ColumnList
    },
    setup(){
        
    }
})
</script>

<style scoped>
.load-more {
  margin-left: 50% !important;
  transform: translate3d(-50%, 0, 0);
}
</style>