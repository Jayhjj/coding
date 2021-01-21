<template>
  <div class="order-box">
      <s-header :name="'我的订单'"></s-header>
      <van-tabs v-model:active="status" class="order-tab" @click="onChangeTab" :color="'#1baeae'">
        <van-tab title="全部" name=""></van-tab>
        <van-tab title="待付款" name="0"></van-tab>
        <van-tab title="待确认" name="1"></van-tab>
        <van-tab title="待发货" name="2"></van-tab>
        <van-tab title="已发货" name="3"></van-tab>
        <van-tab title="交易完成" name="4"></van-tab>
      </van-tabs>
      <div class="content">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="order-list-refresh">
          <van-list
          v-model:loading="loading"
          :finsh="finshed"
          @load="onLoad"
          >

          </van-list>
        </van-pull-refresh>
      </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { reactive, toRefs } from 'vue';
export default {
    components: {
        sHeader
    },
    setup(){
        const state = reactive({
          stutas:'1',
          refreshing: false,
          loading:false,
          finshed:false
        })
        const onChangeTab = (name,title) => {
          console.log(name,title)
        }
        const onRefresh = () => {
          state.refreshing = true
        }
        return{
          ...toRefs(state),
          onChangeTab
        }
    }
}
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  .order-box {
    .order-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .order-name {
        font-size: 14px;
      }
    }
    .order-tab {
      margin-top: 44px;
      position: fixed;
      left: 0;
      z-index: 1000;
      width: 100%;
      border-bottom: 1px solid #e9e9e9;
    }
    .content {
      height: calc(~"(100vh - 70px)");
      overflow: hidden;
      overflow-y: scroll; 
      margin-top: 78px;
    }
    .order-list-refresh {
      .van-card__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .van-pull-refresh__head {
        background: #f9f9f9;
      }
      // .van-list {
      //   min-height: calc(100vh - 88px);
      //   background: #f9f9f9;
      //   margin-top: 20px;
      // }
      .order-item-box {
        margin: 20px 10px;
        background-color: #fff;
        .order-item-header {
          padding: 10px 20px 0 20px;
          display: flex;
          justify-content: space-between;
        }
        .van-card {
          background-color: #fff;
          margin-top: 0;
        }
      }
    }
  }
</style>