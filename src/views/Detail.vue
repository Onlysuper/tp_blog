<template>
  <div class="detail">
   我是详情页
    <BackTop></BackTop>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class Home extends Vue  {
  
}
</script>

<style lang="less" scoped>
@import "../assets/base.less";
.article{
  line-height: 1;
  .list{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 15px;
    padding-bottom: 20px;
    .text{
      flex:1;
      .title{
        margin-top: 8px;
        color: @m-color1;
        font-size: 18px;
      }
      .abstract{
        margin-top: 8px;
        color: @m-color2;
        font-size: 14px;
        line-height: 1.5;
      }
      ul.meta{
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        list-style: none;
        color: @m-color2;
        font-size: 12px;
        li{
           list-style: none;
           margin-left: 10px;
        }
      }
    }
    .pic{
      width: 100px;
      height: 100px;
      .img-blur-done{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
}
</style>