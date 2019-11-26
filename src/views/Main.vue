<template>
  <div id="app">
    <Layout class="base-back">
        <Header :style="{position: 'fixed', width: '100%'}" class="Layout-Header primary-back bs-bottom-border">
           <headerLg :theme="theme" :activeMenuPath="activeMenuPath" :menuList="menuList" @menuSelect="menuSelect" @goWrite="goWrite"></headerLg>
           <headerMd :menuList="menuList" @menuSelect="menuSelect"></headerMd>
           <headerSm :theme="theme" :menuList="menuList" @menuSelect="menuSelect"></headerSm>
        </Header>
        <!-- <Content :style="{margin: '88px 20px 0', minHeight: '500px'}"> -->
        <Content class="Layout-content">
            <keep-alive>
               <router-view></router-view>
            </keep-alive>
        </Content>
        <Footer class="home-footer">
          <p>laomeng © 2019</p>
          <p>Powered by Jekyll | Theme H2O</p>
        </Footer>
     <BackTop></BackTop>
    </Layout>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import headerLg from "@src/views/header/Lg.vue";
import headerMd from "@src/views/header/Md.vue";
import headerSm from "@src/views/header/Sm.vue";

@Component({
  components:{
    headerLg,
    headerMd,
    headerSm
  }
})

export default class App extends Vue {

    private  theme:string= 'light';
    private  activeMenuPath:string= '/home';
    private  menuList:Array<any>=[
          {
            label:"首页",
            path:"/",
            index:'/',
          },
          {
            label:"关于",
             path:"/main/about",
            index:'list',
          },
          {  
            label:"文章",
             path:"/main/articel",
            index:'articel'
          },
          {  
            label:"技术",
             path:"/main/technology",
            index:'technology'
          }
        ]

  private menuSelect(item:any){
    this.activeMenuPath = item;
    console.log('activeMenuPath',this.activeMenuPath);
    this.$router.push({
      path:item
    })
  }
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
  .Layout-Header{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    background: #fff;
    z-index: 10;
  } 
  .Layout-content{
    margin: 70px .3rem 0;
    min-height: 500px
  }
  .main-container{
      // display: flex;
      // flex-direction: row;
      margin: 0 auto;
      max-width: 1200px;
      .left-container{
        flex: 2;
        padding: .2rem;
      }
      .right-container{
        flex:1;
        padding-left: .2rem;
        box-sizing: border-box;
        margin-left: .2rem;
        padding: .2rem;
      }
  }
  .home-footer{
    text-align: center;
  }
  .ivu-layout-header{
    padding: 0 .3rem
  }
  .ivu-layout-header{
      height: 1.6rem;
      line-height: 1.6rem;
  }
@media screen and (max-width: 576px) {
    .Layout-Header{
    }
}
@media screen and (min-width: 576px) and(max-width: 992px){
    .Layout-Header{
    }
}
@media screen and (min-width: 992px) {
    .Layout-Header{
      height: 88px;
      line-height: 88px;
    }
    .Layout-content{
      margin: 88px 20px 0;
      min-height: 500px
    }
}
</style>
