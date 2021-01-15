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
export default {
  components: {
    sHeader
  },
}
</script>

<style>

</style>