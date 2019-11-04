<template>
  <div id="app">
    <Layout>
        <Header class="m-header">
           <!-- 大屏幕 -->
            <div class="header-left lg-show">
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
            <div class="md-show md-top">
                <div class="layout-logo">
                  <img src="./assets/logo.png">
                </div>
                <div @click="mdMenuVisibleFn" class="md-top-but">
                    点我
                </div>
                <transition name="haha">
                  <div v-if="mdMenuVisible" class="md-show md-menu">
                    <Menu style="width:100%;text-align:center">
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
                </transition>
            </div>
            
             <!-- 中等屏幕 end -->
           
            <div class="layout-user">

              <div class="item m-avatar">
                <Avatar size="large"  src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              </div>
              <Dropdown>
                  <a href="javascript:void(0)">
                      <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                      <DropdownItem>收藏的文章</DropdownItem>
                      <DropdownItem>喜欢的文章</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
              <div class="item m-but">
                <button >写文章</button>
              </div>
            </div>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
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
      mdMenuVisible:false// 中屏幕菜单
    }
  }
  private mdMenuVisibleFn(){
    this.mdMenuVisible = !this.mdMenuVisible;
  }
}
</script>

<style lang="scss">
#app {
   color:#333;
   font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    -webkit-tap-highlight-color: transparent;
  .md-show{
    display:none;
  }
  
  .m-header{
     position: relative;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
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
  @media screen and (max-width: 900px) {
    .lg-show{
        display: none
      }
      .md-show {
        display: flex;
       
        &.md-top{
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
