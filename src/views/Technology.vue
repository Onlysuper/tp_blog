<template>
  <div class="home">
    <div class="tab-bar">
      <ul class="nav-list">
        <li><span>前端</span></li>
        <li><span>前端</span></li>
        <li><span>前端</span></li>
        <li><span>前端</span></li>
        <li><span>前端</span></li>
         <li><span>前端</span></li>
        <li><span>前端</span></li>
        <li><span>前端</span></li>
        <li><span>前端</span></li>
        <li><span>前端</span></li>
      </ul>
    </div>
    <div class="tag-bar">

    </div>
    <div class="main-container">
      <Row style="margin:0 auto">
        <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 16, offset: 0 }">
         <div class="left-container">
            <div class="article">
              <div class="list" v-for="(item,index) in articelList" :key="index">
                <div class="text">
                  <h4 class="title" @click="goDetail(item)">
                    {{item.title}}
                  </h4>
                  <p class="abstract">
                    {{item.abstract}}
                  </p>
                  <ul class="meta">
                    <li> {{item.writer}}</li>
                    <li> {{item.subscribe}}</li>
                    <li>{{item.readers}}</li>
                    <li>{{item.comments}}</li>
                  </ul>
                </div>
                <div class="pic">
                  <img class="img-blur-done" src="https://upload-images.jianshu.io/upload_images/18529255-16f0b301ab42b644?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="120">
                </div>
              </div>
            </div>
            <bone-list></bone-list>
          </div>
        </Col>
        <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 8, offset: 0}">
         <div class="right-container">
           <tags-module></tags-module>
           <articel-module></articel-module>
           <!-- <articel-module></articel-module> -->
           <english-module></english-module>
            <!-- 待开发 -->
            <!-- <div class="m-recommend">
              <div class="m-title">
                推荐阅读
              </div>
              <ul>
                <li v-for="(item,index) in recommendList" :key="index">
                  <p>{{item.title}}</p>
                  <p class="nums">阅读<span> {{item.readers}}</span></p>
                </li>
              </ul>
            </div> -->
          </div>
        </Col>
        </Row>
     
     
    </div>
   
  </div>
</template>

<script lang="ts">
import tagsModule from "@src/components/lmModule/tagsModule.vue";
import adminModule from "@src/components/lmModule/adminModule.vue";
import articelModule from "@src/components/lmModule/articelModule.vue";
import englishModule from "@src/components/lmModule/englishModule.vue";
import boneList from "@src/components/boneStyle/articleList.vue";
import apis from "@src/apis/index.ts";
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  components: {
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
.article{
  line-height: 1;
  .list{
    display: flex; 
    flex-direction: row;
    padding-top: 15px;
    padding-bottom: 20px;
    .text{
      flex:1;
      .title{
        margin-top: 8px;
        color: @m-color1;
        font-size: 18px;
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .abstract{
        margin-top: 8px;
        color: @m-color1;
        font-size: 14px;
        line-height: 1.5;
      }
      ul.meta{
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        list-style: none;
        color: @m-color1;
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
.m-title{
  border-left: .1rem solid @m-color1;
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
          color: @m-color1;
          margin-top: .1rem;
          line-height: 1;
        }
      }
    }
  }
}
.tab-bar{
  // position: fixed;
    top: 0;
    width: 100%;
    // height: 2rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
  .nav-list{
    position: relative;
    li{
      height: 100%;
      align-items: center;
      display: flex;
      flex-shrink: 0;
      color: #71777c;
      padding:.2rem;
      span{
        font-size: .36rem;
      }
    }
  }
}
.nav-list {
  max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;

}
@media (max-width: 980px){
  .nav-list{
    width: auto;
    overflow-x: auto;
  }
}

</style>