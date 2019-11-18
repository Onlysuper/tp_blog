<template>
 <!-- 大屏幕 -->
 <div class="lg-header lg-block">
    <div class="header-left lg-top">
        <div class="layout-logo">
            <img src="../../assets/logo.png">
        </div>
        <div class="layout-nav">
            <Menu class="m-menu" mode="horizontal" :theme="theme" :active-name="menuList[0].path" @on-select="menuSelect">
                <MenuItem v-for="(item,index) in menuList" :key="index" :name="item.path">
                    {{item.label}}
                </MenuItem>
            </Menu>
        </div>
        <div class="layout-search">
            <form class="search-form">
                <input type="text" name="" id="" autocomplete="off" placeholder="搜索" class="search-input">
                <a class="search-btn" href="javascript:void(null)">
                    <Icon type="ios-search" />
                </a>
            </form>
        </div>
    </div>
    
    <div ref="preference" class="preference">
            <a @click="lightDarkChange" href="javascript:void(0)">
                <Icon type="ios-sunny" />
            </a>
            <lightDarkDialog v-model="lightDarkDialog"></lightDarkDialog>
    </div>
    <div class="layout-user">
        <div class="item m-avatar">
        <Avatar size="large"  src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </div>
        <Dropdown class="arrow-box">
            <Icon size="22" color="#969696" type="md-arrow-dropdown" />
            <DropdownMenu slot="list">
                <DropdownItem v-for="(item,index) in menuList" :key="index">{{item.label}}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <div class="item m-but">
        <button @click="goWrite">写文章</button>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop,Emit } from 'vue-property-decorator';
import lightDarkDialog from "@src/components/lightDarkDialog/index.vue";
@Component({
    components:{
        lightDarkDialog
    }
})
export default class headerLg extends Vue {
    @Prop({
        type:Array,
        default:[]
    })
    public menuList!:[];
    @Prop({default:'light'})
    theme: any

    lightDarkDialog = false; // 皮肤选择模块
    switch1:Boolean=true

    @Emit('menuSelect')
    menuSelect(item:any) {
        return item
    }
    @Emit('menuSelect')
    goWrite(item:any) {
        return item
    }
    lightDarkChange(){
        this.lightDarkDialog = !this.lightDarkDialog;
    }
    lightDarkConfig(){
        document.addEventListener('click',(e)=>{
            if(!this.$refs['preference'].contains(e.target)){
                this.lightDarkDialog = false;
            }
         })
    }
    created(){ 
        this.lightDarkConfig();
    }
}
</script>
<style lang="less" scoped>
.lg-header{
width: 100%;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #fff;
border-bottom: 1px solid #f0f0f0;
display: none;
  .layout-logo{
        height: 56px;
        img{
          height: 100%;
        }
    }
    .header-left{
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: start;
      height: 100%;
    }
   
    .layout-user{
      margin-left: 40px;
      display: flex;
      flex-direction: row;
     
      .m-but{
        margin-left: 20px;
        button{
          width: 100px;
          height: 40px;
          line-height: 24px;
          margin: 8px 12px 0;
          border-radius: 20px;
          font-size: 15px;
          color: #fff;
          background-color: #ea6f5a;
          box-shadow: none;
          border: 0;
          outline: 0;
          cursor: pointer;
        }
      }
    } 

    .m-menu{
        background: transparent;
        .ivu-menu-item:not(.ivu-menu-item-active){
            color:#333;
        }
        .ivu-menu-item,.ivu-menu-item-active{
            font-size: 18px;
            border:0;
        &:hover{
            border:inherit
        }
        } 
        &::after{
            display: none;
        }
    }
} 
.search-form{
    position: relative;
    // display: flex;
    overflow: hidden;
    input{
        height: .8rem;
        font-size: .26rem;
        border: 1px solid #eee;
        border-radius: .4rem;
        background: #eee;
        transition: width .5s;
        padding-left: .2rem;
        border: 0;
        outline: 0;
        width: 4rem;
        &::placeholder{
        }
        &:focus{
            border:0;
            outline: 0;
            width: 5rem;
            &+a{
                background: #888;
                color: #fff !important;
            }
        }
    }
    a.search-btn{
       color: #969696!important;
       font-size: .3rem;
       position:absolute;
       right: 0;
       top: 50%;
       height: .6rem;
       width: .6rem;
    //    margin-top: -.25rem;
       transform: translateY(-55%);
       right: .1rem;
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 100%;
    }
}
.preference{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    a{
        @extend .preference;
        flex: 1;
    }
    i{
        font-size: .8rem;
        color: #969696;
    }
    .preference-modal{
        box-sizing: border-box;
        position: absolute;
        right:-.5rem;
        top: 1rem;
        background: @back-light1;
        min-width: 4rem;
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
        -webkit-filter: drop-shadow(0 0 8px rgba(0,0,0,.1));
        z-index: 999;
        padding: .2rem;
        border-radius:.04rem;
        .row{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size: .3rem;
        }
        &::before,&::after{
            position: absolute;
            top: -10px;
            left: 78%;
            content: "";
            display: inline-block;
            border: 9px solid transparent;
            border-top: none;
        }
        &::after{
            top: -9px;
            border-bottom: 9px solid #fff;
        }
    }
}
</style>