<template>
 <!-- 小屏幕 -->
    <div class="sm-header sm-block">
        <div style="flex:0 0 .2rem" class="sm-top" @click="smMenuVisible = true">
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
            <input class="search-input bs-input-back" type="text" name="" id="" autocomplete="off" placeholder="请输入关键字" >
            <a class="search-btn" href="javascript:void(null)">
                <Icon type="ios-search" />
            </a>
        </form>
        <div style="flex:0 0 0"></div>
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
    height: 100%;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    display: none;
    width: 100%;
    .sm-top{
        display: block;
        height: 100%;
        text-align: center;
        padding-left: .2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            font-size: 1rem
        }
    }
}
.search-form{
    position: relative;
    overflow: hidden;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .4rem;
    flex: 1;
    input{
        height: 1rem;
        line-height: 1rem;
        font-size: .26rem;
        border: 1px solid #eee;
        border-radius: .4rem;
        transition: width .5s;
        padding-left: .2rem;
        border: 0;
        outline: 0;
        width: 64%;
        font-size:.36rem;
        &::placeholder{
             font-size:.36rem;
        }
        &:focus{
            border:0;
            outline: 0;
            width: 84%;
            &+a{
                background: #888;
                color: #fff !important;
                 right: 10%;
            }
        }
    }
    a.search-btn{
       transition: all .5s;
       color: #969696!important;
       font-size: .3rem;
       position:absolute;
       right: 20%;
       top: 50%;
       height: .6rem;
       width: .6rem;
    //    margin-top: -.25rem;
       transform: translateY(-55%);
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 100%;
       i{
           font-size: .5rem
       }
    }
}
</style>