<template>
  <header class="simple-header">
    <van-icon name="arrow-left" @click="goBack"/>
    <div class="simple-header-name">{{name}}</div>
    <van-icon name="weapp-nav" />
  </header>
</template>
<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
	props:{
		name:{
			type: String,
			default: ''
    }
	},
	setup(props){
      // const name = ref(props.name)
      const router = useRouter()
      const goBack = () => {
        router.go(-1)
      }
      return{
        // name,
        goBack
      }
	}
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.simple-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  padding: 0 10px;
  border-bottom: 1px solid #dcdcdc;
  background-color: #fff;
  line-height: 44px;
  color: #252525;
  font-size: 14px;
  .fj();
  .wh(100%, 44px);
  .boxSizing();
  .van-icon {
    line-height: 44px;
  }
}
</style>