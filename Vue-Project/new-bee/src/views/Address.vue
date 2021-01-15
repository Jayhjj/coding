<template>
  <div class="address-box">
    <s-header :name="'地址管理'"></s-header>
    <div class="address-item">
      <van-address-list
        v-if="from != 'mine'"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
      <van-address-list
        v-else
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { reactive, toRefs, onMounted } from "vue";
import {getAddressList} from '@/service/address.js';
import {useRouter,useRoute} from 'vue-router';
export default {
  components: {
    sHeader
  },
  setup() {
    const router  = useRouter()
    const route  = useRoute()
    const state = reactive({
      list: [],
      from: route.query.from
    });

    //请求所有地址列表
    onMounted( async () => {
      const {data} = await getAddressList()
      if(!data){
        state.list = [];
        return
      }
      //空,得去增加数据
      console.log(data)
    })

    //新增地址
    const onAdd = () => {
      router.push({path:'/address-edit',query:{type: 'add',from:state.from}})
    }
    return {
      ...toRefs(state),
      onAdd
    };
  }
};
</script>

<style lang="less">
@import "../common/style/mixin";
.address-box {
  .van-radio__icon {
    display: none;
  }
  .address-item {
    margin-top: 44px;
    .van-button {
      background: @primary;
      border-color: @primary;
    }
  }
}
</style>