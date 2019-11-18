<template>
 <!-- 小屏幕 -->
    <div class="sm-header sm-block">
        <div class="sm-top" @click="smMenuVisible = true">
            <Icon size="26" type="ios-menu" />
            <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="smMenuVisible">
                <Menu class="m-menu" mode="vertical" :theme="theme" :active-name="menuList[0].path" @on-select="menuSelect">
                    <MenuItem v-for="(item,index) in menuList" :key="index" :name="item.path">
                        {{item.label}}
                    </MenuItem>
                </Menu>
            </Drawer>
        </div>
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
    }
}
</style>