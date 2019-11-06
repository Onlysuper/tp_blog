<template>
  <div class="home">
    <div class="main-container">
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
      </div>
      <div class="right-container">
        <!-- 待开发 -->
      </div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  components: {}
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
  goDetail(item:any){
    this.$router.push({
      path:"/detail"
    })
  }
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
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
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