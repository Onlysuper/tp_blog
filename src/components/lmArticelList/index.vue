<template>
    <div class="article primary-back">
        <div class="list bs-bottom-border" v-for="(item,index) in list" :key="index">
            <div class="text">
                <h4 class="title bs-title" @click="goDetail(item)">
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
</template>
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
        font-size: 18px;
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .abstract{
        margin-top: 8px;
        font-size: 14px;
        line-height: 1.5;
      }
      ul.meta{
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        list-style: none;
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
<script lang="ts">
import { Component, Vue,Prop, Provide } from 'vue-property-decorator';
@Component({
  components: {
   
  }
})
export default class lmArticelList extends Vue  {
     @Prop({
        type:Array,
        default:[]
    })
    public list!:[];

    goDetail(item:any){
        this.$emit("goDetail",item)
    }
}
</script>s