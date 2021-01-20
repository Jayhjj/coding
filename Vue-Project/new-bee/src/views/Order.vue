<template>
  <div class="order-box">
      <s-header :name="'我的订单'"></s-header>
      <van-tabs v-model:active="activeName">
        <van-tab title="标签 1" name="a">内容 1</van-tab>
        <van-tab title="标签 2" name="b">内容 2</van-tab>
        <van-tab title="标签 3" name="c">内容 3</van-tab>
      </van-tabs>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
export default {
    components: {
        sHeader
    },
    setup(){
        
    }
}
</script>

<style lang="less" scoped>
 
</style>