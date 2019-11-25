<template>
 <!-- 中屏幕 -->
  <div class="md-header md-block">
    <div class="md-top">
        <div class="layout-logo">
            <img src="../../assets/logo.png">
        </div>
        <Dropdown @on-click="menuSelect">
            <a href="javascript:void(0)">
                展开
                <!-- <Icon size="25" type="ios-menu" /> -->
            </a>
            <DropdownMenu slot="list">
                <DropdownItem v-for="(item,index) in menuList" :key="index"  :name="item.path">{{item.label}}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue,Prop } from 'vue-property-decorator';
@Component
export default class headerLg extends Vue {
    @Prop({
        type: Array,
        default: []
    })
    public menuList!: []

    private menuSelect(item:any){
        this.$emit("menuSelect",item)
    }
}
</script>
<style lang="less" scoped>
.md-header{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    display: none;
    width: 100%;
    .md-top{
        display: flex;
        .md-top-but{
            flex:1;
            float: left;
            border: 1px solid transparent;
            border-radius: 4px;
            background:#eee;
        }
         .layout-logo{
            height: 56px;
            width: 2rem;
            img{
            height: 100%;
            }
        }
    }
}
      
</style>