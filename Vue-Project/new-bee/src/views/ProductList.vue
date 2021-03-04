<template>
  <div class="product-list-wrap">
    <div class="product-list-content">
      <header class="category-header wrap">
        <van-icon name="arrow-left" class="nbicon" @click="goHome" />
        <div class="header-search">
          <van-icon name="search" class="nbsearch" />
          <input type="text" class="search-title" v-model="keyword" />
        </div>
        <span class="search-btn" @click="getSearch">搜索</span>
      </header>
      <van-tabs type="card" color="#1baeae" @click="changeTab">
        <van-tab title="推荐" name></van-tab>
        <van-tab title="新品" name="new"></van-tab>
        <van-tab title="价格" name="price"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="product-list-refresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="productList.length ? '没有更多了' : '搜索想要的商品'"
          @load="onLoad"
          @offset="10"
        >
        <template v-if="productList.length">
            <div class="product-item">

            </div>
        </template>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import {search} from '../service/goods'
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      keyword: route.query.keyword || "",
      list:[],
      loading:false,
      finished:false,
      refreshing: false,
      productList:[],
      totalPage:0,
      page:1,
      orderBy:''
    });
    const init = async () => {
        const {categoryId} = route.query
        if(!categoryId || state.keyword){
            state.finished = true;
            state.loading = true;
            return
        }
        const {data ,data:{list}} = await search({pageNumber:state.page, goodsCategoryId: categoryId, keyword: state.keyword, orderBy: state.orderBy}) 
        state.productList = state.productList.concat(list)
        state.totalPage = data.totalPage
    }
    return{
        ...toRefs(state)
    }
  }
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.product-list-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  .category-header {
    .fj();
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    .boxSizing();
    font-size: 15px;
    color: #656771;
    z-index: 10000;
    &.active {
      background: @primary;
    }
    .icon-left {
      font-size: 25px;
      font-weight: bold;
    }
    .nbicon {
      padding-top: 18px;
    }
    .header-search {
      display: flex;
      width: 76%;
      height: 20px;
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: #f7f7f7;
      .borderRadius(20px);
      .nbsearch {
        padding-top: 4px;
        padding-left: 10px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        background: #f7f7f7;
      }
    }
    .icon-More {
      font-size: 20px;
    }
    .search-btn {
      height: 28px;
      margin: 8px 0;
      line-height: 28px;
      padding: 0 5px;
      color: #fff;
      background: @primary;
      .borderRadius(5px);
      margin-top: 10px;
    }
  }
}
</style>