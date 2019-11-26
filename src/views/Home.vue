<template>
  <div class="home bs-text">
    <div class="main-container">
      <Row style="margin:0 auto">
        <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 16, offset: 0 }">
         <div class="left-container">
            <articelList :list="articelList" @goDetail="goDetail"></articelList>
            <bone-list></bone-list>
          </div>
        </Col>
        <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 8, offset: 0}">
         <div class="right-container">
           <adminModule></adminModule>
           <tags-module></tags-module>
           <articel-module></articel-module>
           <english-module></english-module>
          </div>
        </Col>
        </Row>
    </div>
   
  </div>
</template>

<script lang="ts">
import articelList from "@src/components/lmArticelList/index.vue";
import tagsModule from "@src/components/lmModule/tagsModule.vue";
import adminModule from "@src/components/lmModule/adminModule.vue";
import articelModule from "@src/components/lmModule/articelModule.vue";
import englishModule from "@src/components/lmModule/englishModule.vue";
import boneList from "@src/components/boneStyle/articleList.vue";
import apis from "@src/apis/index.ts";
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  components: {
    articelList,// 文章列表
    adminModule,
    tagsModule,
    articelModule,
    englishModule,
    boneList,
  }
})
export default class Home extends Vue  {
 articelList : Array<object> = [
    {
      title:"《心灵捕手》教育启示录",
      abstract:" 1 10月15日，一个满载着39人的集装箱被送离了爱尔兰。 集装箱里面有尚未成年的男孩，有风华正茂的少女，还有已为人父的中年男子...... 他...",
      img:"https://upload-images.jianshu.io/upload_images/18529255-16f0b301ab42b644?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      writer:"一切来得及",
      subscribe:'100',
      readers:'99',
      comments:'99'
    }
  ]

   recommendList : Array<object> = [
    {
      title:"《心灵捕手》教育启示录",
      readers:'99',
    }
  ]
  
  goDetail(item:any){
    this.$router.push({
      path:"/main/detail"
    })
  }
}
</script>

<style lang="less" scoped>

.m-title{
  font-weight: bold;
  font-size: .3rem;
  padding-left: .2rem;
  line-height: 1;
  margin-top: .2rem;
}
.m-recommend{
  ul{
    list-style: none;
    li{
      list-style: none;
      margin-top: .2rem;
      p{
        font-size: .26rem;
        &.nums{
          font-size: .22rem;
          margin-top: .1rem;
          line-height: 1;
        }
      }
    }
  }
}
</style>