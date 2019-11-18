<template>
    <div  v-show="show" v-model="currentValue" class="preference-modal">
        <div class="row">
            <span>夜间模式</span>
            <i-switch  @on-change="switchChange">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </div>
    </div>
</template>
<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class switchLightDark extends Vue {
    @Prop({
        type:Boolean,
        default:false
    })
    public value!:false;
    private show:Boolean=true
    private currentValue:Boolean=false
    @Watch('value')
    onValueChanged(val: String, oldVal: String) {
        this.show = val
    }
    mounted(){
        this.show = this.value;
        const theme_ = this.mStorage.get("theme");
        document.getElementById('app').className ='theme_'+theme_;
    }
    switchChange(val:string){
        if(val){
            // 夜间模式
            this.mStorage.set("theme","night")
            document.getElementById('app').className ='theme_'+'night' ;
        }else{
            // 白天模式
            this.mStorage.set("theme","day")
            document.getElementById('app').className ='theme_'+'day' ;
        }
    }
   
}

</script>
<style lang="less">
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
</style>