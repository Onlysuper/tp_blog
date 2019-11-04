<template>
  <div id="app">
    <Layout>
        <Header :style="{position: 'fixed', width: '100%'}" class="m-header">
           <!-- 大屏幕 -->
            <div class="header-left lg-top">
                <div class="layout-logo">
                  <img src="./assets/logo.png">
                </div>
                <div class="layout-nav">
                  <Menu class="m-menu" mode="horizontal" :theme="theme1" active-name="1">
                      <MenuItem name="1">
                          发现
                      </MenuItem>
                      <MenuItem name="2">
                          关注
                      </MenuItem>
                    
                      <MenuItem name="3">
                          信息
                      </MenuItem>
                  </Menu>
                  
                </div>
                <div class="layout-search">
                    <Input search placeholder="搜索" />
                </div>
            </div>
            <!-- 中等屏幕 -->
            <div class="md-top">
                <div class="layout-logo">
                  <img src="./assets/logo.png">
                </div>
                <Dropdown>
                    <a href="javascript:void(0)">
                       <Icon size="25" type="ios-menu" />
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem v-for="(item,index) in menuList" :key="index">{{item.label}}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <!-- 中等屏幕 end -->
            <!-- 小屏幕 -->
            <div class="sm-top" @click="smMenuVisible = true">
                <Icon size="26" type="ios-menu" />
                <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="smMenuVisible">
                    <div>
                        <div v-for="(item,index) in menuList" :key="index">{{item.label}}</div>
                    </div>
                </Drawer>
            </div>
            <!-- 小屏幕 end -->
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
                <button >写文章</button>
              </div>
            </div>
        </Header>
        <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
             <router-view></router-view>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';


@Component({
  components: {
    HelloWorld,
  },
})

export default class App extends Vue {
  data(){
    return {
      theme1: 'light',
      smMenuVisible: false,
      menuList:[
          {
            label:"发现",
            url:"",
            index:0,
          },
          {
            label:"关注",
            index:1,
          },
          {  
            label:"信息",
            index:2
          }
        ],
    }
  }
}
</script>

<style lang="less">
@import "./assets/base.less";
.arrow-box{
  margin-top: 10px;
  margin-left: 5px;
}
#app {
  color:#333;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  -webkit-tap-highlight-color: transparent;
  .ivu-layout{
    background:#fff;
  }
  .m-header{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
  } 
  .m-avatar{
    color:#333
  }
  // pc
  .md-top{
    display:none;
  }
  .sm-top{
     display:none;
  }
  .layout-logo{
        height: 56px;
        img{
          height: 100%;
        }
    }
    .layout-nav{
      font-weight: 8;
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
    .header-left{
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: start;
      height: 100%;
    }
    .layout-search{
      flex: 1;
      max-width: 200px;
      margin-left: 20px;
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
  // 平板
  @media screen and (max-width: 992px) {
      .lg-top{
        display: none
      }
      .sm-top{
        display:none;
      }
      .md-top{
        display: flex;
        .md-top-but{
          flex:1;
          float: left;
          border: 1px solid transparent;
          border-radius: 4px;
          background:#eee;
        }
      }
      .md-menu{
        height: 100px;
        width: 100%;
        position: absolute;
        left: 0;
        right:0;
        top: 65px;
      }
  }
  // 手机
   @media screen and (max-width: 576px) {
      .lg-top{
        display: none
      }
      .md-top {
        display: none;
      }
      .sm-top{
        display: block;
        height: 100%;
        text-align: center;
      }
      .layout-user{
        display:  none;
      }
      .m-header{
        padding-left: 15px;
        padding-right: 15px;
      }
  }
  
}
  .haha-enter-active {
    height:0;
  }
  .haha-appear-to /* .fade-leave-active below version 2.1.8 */ {
    height: auto;
  }

 .haha-leave-active {
   height:auto;
  }
  .haha-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height:0;
  }
</style>
