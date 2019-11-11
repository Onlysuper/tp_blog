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
            <Input search placeholder="搜索" />
        </div>
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
import { Component, Vue,Prop } from 'vue-property-decorator';
@Component
export default class headerLg extends Vue {
    @Prop({default:[]})
    menuList: Array

    @Prop({default:'light'})
    theme: String

    private menuSelect(item:any){
        this.$emit("menuSelect",item)
    }
    private goWrite(item:any){
        this.$emit("menuSelect",item)
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
} 
//   @media screen and (min-width: 992px) {
//       .lg-header{
//           display: flex;
//       }
//   }
</style>>