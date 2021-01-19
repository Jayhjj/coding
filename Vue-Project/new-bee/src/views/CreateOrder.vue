<template>
  <div class="create-order">
    <s-header :name="'生成订单'"></s-header>
    <!-- 地址 -->
    <div class="address-wrap">
      <div class="name" @click="goTo">
        <span>{{address.userName}}</span>
        <span>{{address.userPhone}}</span>
      </div>
      <div class="address">{{address.provinceName}} {{address.cityName}} {{address.regionName}} {{address.detailAddress}}</div>
      <van-icon class="arrow" name="arrow" />
    </div>

    <!-- 列表 -->
    <div class="good">
      <div class="good-item" v-for="(item, index) in cartList" :key="index">
        <div class="good-img"><img :src="$filters.prefix(item.goodsCoverImg)" alt=""></div>
        <div class="good-desc">
          <div class="good-title">
            <span>{{ item.goodsName }}</span>
            <span>x{{ item.goodsCount }}</span>
          </div>
          <div class="good-btn">
            <div class="price">¥{{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 生成订单 -->
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{total}}</span> 
      </div>
      <van-button @click="handleCreateOrder" type="primary" class="pay-btn" color="#1baeae">生成订单</van-button>
    </div>

    <van-popup
      closeable
      :close-on-click-overlay="false"
      v-model:show="showPay"
      position="bottom"
      :style="{ height: '30%' }"
      @close="close"
    >
      <div :style="{ width: '90%', margin: '0 auto', padding: '50px 0' }">
        <van-button :style="{ marginBottom: '10px' }" color="#1989fa" block @click="handlePayOrder(1)">支付宝支付</van-button>
        <van-button color="#4fc08d" block @click="handlePayOrder(2)">微信支付</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
import sHeader from "@/components/SimpleHeader";
import { reactive, toRefs, onMounted, computed } from 'vue';
import {getByCartItemIds} from '@/service/cart.js'
import {getAddressDetail,getDefaultAddress} from '@/service/address.js'
import {createOrder,payOrder} from '@/service/order.js'
import {useRoute,useRouter} from 'vue-router'
import {Toast} from 'vant'
import {setLocal,getLocal} from '@/common/js/utils.js'
export default {
  components: {
    sHeader
  },
  setup(){
      const route = useRoute()
      const router = useRouter()
      const state = reactive({
          cartList:[],
          cartItemId:[],
          address: {},
          orderNo:'',// 生成订单的订单编号
          showPay: false
      })
      onMounted(() => {
          init()
      })
      const init = async () => {
           Toast.loading({message:'加载中...',forbidClick: true})
        //    console.log(route.query)
           const {cartItemId,addressId} = route.query
           const _cartItemId = cartItemId ? JSON.parse(cartItemId) : JSON.parse(getLocal('cartItemId'))
           //cartItemId有不存在的情况,所以在本地存储一下
            setLocal('cartItemId',JSON.stringify(_cartItemId))

           //请求用户地址
            const {data: address} = addressId ? await getAddressDetail(addressId) : await getDefaultAddress()
            if(!address){
                router.push({path:'/address'})
                return
            }
            state.address = address
            console.log(address)
            //请求要购买的商品数据
            // console.log( _cartItemId.join(','))
            const {data :list} = await getByCartItemIds({cartItemIds: _cartItemId.join(',')})
            // console.log(list)//拿到了列表数据
            state.cartList = list
            Toast.clear()
      }
      //跳转到编辑地址
      const goTo = () => {
        router.push({path:'/address',query:{cartItemId: JSON.stringify(state.cartItemId),from: 'create-order'}})
      }

      //计算金额
      const total = computed(() => {
        let sum = 0
        state.cartList.forEach(item => {
          sum += item.goodsCount * item.sellingPrice
        })
        return sum
        // console.log(state.cartList)
      })

      //生成订单的按钮
      const handleCreateOrder = async () => {
        const params = {
          addressId: state.address.addressId,
          cartItemIds: state.cartList.map(item => item.cartItemId)
        }
        //调用接口存到数据库
        const {data} = await createOrder(params)
        setLocal('cartItemId','')//订单生成，本地存储清空
        // console.log(data)//订单编号
        state.orderNo = data
        state.showPay = true
      }
      //支付
      const handlePayOrder = async (type) => {
        await payOrder({orderNo: state.orderNo,payType:type})
        Toast.success('支付成功')
        setTimeout(() => {
          router.push({path:'/order'})
        },2000)
      }
      return{
          ...toRefs(state),
          goTo,
          total,
          handleCreateOrder,
          handlePayOrder
      }
  }
};
</script>
<style lang="less" scoped>
  @import '../common/style/mixin';
  .create-order {
    background: #f9f9f9;
    .address-wrap {
      margin-bottom: 20px;
      background: #fff;
      position: relative;
      margin-top: 44px;
      font-size: 14px;
      padding: 15px;
      color: #222333;
      .name, .address {
        margin: 10px 0;
      }
      .arrow {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
      }
      &::before {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 2px;
        background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
        background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
        background-size: 80px;
        content: '';
      }
    }
    .good {
      margin-bottom: 120px;
      padding-bottom: 106px;
    }
    .good-item {
      padding: 10px;
      background: #fff;
      display: flex;
      .good-img {
        img {
          .wh(100px, 100px)
        }
      }
      .good-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .good-title {
          display: flex;
          justify-content: space-between;
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .pay-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #fff;
      padding: 10px 0;
      padding-bottom: 50px;
      border-top: 1px solid #e9e9e9;
      >div {
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
        margin: 10px 0;
        font-size: 14px;
        span:nth-child(2) {
          color: red;
          font-size: 18px;
        }
      }
      .pay-btn {
        position: fixed;
        bottom: 7px;
        right: 0;
        left: 0;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
</style>