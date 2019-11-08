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
                  <Menu class="m-menu" mode="horizontal" :theme="theme1" :active-name="menuList[0].path" @on-select="menuSelect">
                      <MenuItem v-for="(item,index) in menuList" :key="index" :name="item.path">
                          {{item.label}}
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
                <button @click="goWrite">写文章</button>
              </div>
            </div>
        </Header>
        <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
            <keep-alive>
               <router-view></router-view>
            </keep-alive>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';


@Component({
})

export default class App extends Vue {
  // data(){
  //   return {
    private  theme1:string= 'light';
    private  smMenuVisible:boolean= false;
    private  menuList:Array<any>=[
          {
            label:"发现",
            path:"/detail",
            index:'detail',
          },
          {
            label:"关注",
             path:"/about",
            index:'list',
          },
          {  
            label:"信息",
             path:"/articel",
            index:'articel'
          }
        ]
    // }
  // }
  private menuSelect(item:any){
   this.$router.push({
     path:item
   })
  }
  // 
  private goWrite(){
    this.$router.push({
      path:'write'
    })
  }
  private meadiaScale(){
      ;(function(win, lib) {
          var doc = win.document;
          var docEl = doc.documentElement;
          var metaEl = doc.querySelector('meta[name="viewport"]');
          var flexibleEl = doc.querySelector('meta[name="flexible"]');
          var dpr = 0;
          var scale = 0;
          var tid;
          var flexible = lib.flexible || (lib.flexible = {});
          
          if (metaEl) {
              console.warn('将根据已有的meta标签来设置缩放比例');
              var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
              if (match) {
                  scale = parseFloat(match[1]);
                  dpr = parseInt(1 / scale);
              }
          } else if (flexibleEl) {
              var content = flexibleEl.getAttribute('content');
              if (content) {
                  var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
                  var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
                  if (initialDpr) {
                      dpr = parseFloat(initialDpr[1]);
                      scale = parseFloat((1 / dpr).toFixed(2));    
                  }
                  if (maximumDpr) {
                      dpr = parseFloat(maximumDpr[1]);
                      scale = parseFloat((1 / dpr).toFixed(2));    
                  }
              }
          }

          if (!dpr && !scale) {
              var isAndroid = win.navigator.appVersion.match(/android/gi);
              var isIPhone = win.navigator.appVersion.match(/iphone/gi);
              var devicePixelRatio = win.devicePixelRatio;
              if (isIPhone) {
                  // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
                  if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                      dpr = 3;
                  } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                      dpr = 2;
                  } else {
                      dpr = 1;
                  }
              } else {
                  // 其他设备下，仍旧使用1倍的方案
                  dpr = 1;
              }
              scale = 1 / dpr;
          }

          docEl.setAttribute('data-dpr', dpr);
          if (!metaEl) {
              metaEl = doc.createElement('meta');
              metaEl.setAttribute('name', 'viewport');
              metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
              if (docEl.firstElementChild) {
                  docEl.firstElementChild.appendChild(metaEl);
              } else {
                  var wrap = doc.createElement('div');
                  wrap.appendChild(metaEl);
                  doc.write(wrap.innerHTML);
              }
          }

          function refreshRem(){
              var width = docEl.getBoundingClientRect().width;
              if (width / dpr > 540) {
                  width = 540 * dpr;
              }
              var rem = width / 10;
              docEl.style.fontSize = rem + 'px';
              flexible.rem = win.rem = rem;
          }

          win.addEventListener('resize', function() {
              clearTimeout(tid);
              tid = setTimeout(refreshRem, 300);
          }, false);
          win.addEventListener('pageshow', function(e) {
              if (e.persisted) {
                  clearTimeout(tid);
                  tid = setTimeout(refreshRem, 300);
              }
          }, false);

          if (doc.readyState === 'complete') {
              doc.body.style.fontSize = 12 * dpr + 'px';
          } else {
              doc.addEventListener('DOMContentLoaded', function(e) {
                  doc.body.style.fontSize = 12 * dpr + 'px';
              }, false);
          }
          

          refreshRem();

          flexible.dpr = win.dpr = dpr;
          flexible.refreshRem = refreshRem;
          flexible.rem2px = function(d) {
              var val = parseFloat(d) * this.rem;
              if (typeof d === 'string' && d.match(/rem$/)) {
                  val += 'px';
              }
              return val;
          }
          flexible.px2rem = function(d) {
              var val = parseFloat(d) / this.rem;
              if (typeof d === 'string' && d.match(/px$/)) {
                  val += 'rem';
              }
              return val;
          }

      })(window, window['lib'] || (window['lib'] = {}));
  }
  
  mounted(){
    this.meadiaScale()
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
  width:100%;
  color:#404040;
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
