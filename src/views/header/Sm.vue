<template>
 <!-- 小屏幕 -->
    <div class="sm-header sm-block">
        <div class="sm-top" @click="smMenuVisible = true">
             <Icon type="ios-menu" />
            <!-- <Icon size="26" type="ios-menu" /> -->
            <Drawer title="一只老萌" placement="left" :closable="false" v-model="smMenuVisible">
                <Menu class="m-menu" mode="vertical" :theme="theme" :active-name="menuList[0].path" @on-select="menuSelect">
                    <MenuItem v-for="(item,index) in menuList" :key="index" :name="item.path">
                        {{item.label}}
                    </MenuItem>
                </Menu>
            </Drawer>
        </div>
        <form class="search-form">
            <input type="text" name="" id="" autocomplete="off" placeholder="搜索" class="search-input">
            <a class="search-btn" href="javascript:void(null)">
                <Icon type="ios-search" />
            </a>
        </form>
        <div></div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class headerLg extends Vue {
    // @Prop({default:[]})
    // menuList: Array
    @Prop({
        type:Array,
        default:[]
    })
    public menuList!:[]

    @Prop(String) 
    public theme!: string
    // @Prop({default:'light'})
    // theme: String

    private  smMenuVisible:boolean= false;
    private menuSelect(item:any){
        this.$emit("menuSelect",item)
    }
}
</script>
<style lang="less" scoped>
.sm-header{
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    display: none;
    width: 100%;
    .sm-top{
        display: block;
        height: 100%;
        text-align: center;
        padding-left: .2rem;
    }
}
.search-form{
    position: relative;
    // display: flex;
    overflow: hidden;
     height: .8rem;
     display: flex;
     align-items: center;
     justify-content: center;
      border-radius: .4rem;
    input{
        height: .8rem;
        line-height: .8rem;
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
</style>