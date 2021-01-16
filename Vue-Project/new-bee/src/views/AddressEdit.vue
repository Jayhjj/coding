<template>
  <div class="address-edit">
    <s-header :name="'新增地址'"></s-header>
    <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import {Toast} from 'vant'
import { reactive, onMounted, toRefs } from 'vue';
import {tdist} from '../common/js/utils'
export default {
  components: {
    sHeader
  },
  setup(){
      const state = reactive({
          areaList:{
              province_list: {},
              city_list: {},
              county_list: {}
          }
      })
      onMounted(() => {
          let _province_list = {}
          let _city_list = {}
          let _county_list = {}
          tdist.getLev1().forEach(p => {
            _province_list[p.id] = p.text
            
            tdist.getLev2(p.id).forEach(c => {
              _city_list[c.id] = c.text

              tdist.getLev3(c.id).forEach(q => {
                _county_list[q.id] = q.text
              })
            })
          })
          console.log(_province_list)
      })
      return {
          ...toRefs(state)
      }
  }
}
</script>

<style>

</style>