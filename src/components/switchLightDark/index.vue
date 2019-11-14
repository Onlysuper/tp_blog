<template>
    <div  v-show="show"  class="preference-modal">
        <div class="row">
            <span>夜间模式</span>
            <i-switch>
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

    @Watch('value')
    onValueChanged(val: String, oldVal: String) {
        this.show = val
    }
    mounted(){
        this.show = this.value
    }
    // created(){ 
    //     document.addEventListener('click',(e)=>{
    //         console.log(e);
    // //         console.log(this.$refs.preference.contains(e.target));
    // //         if(!this.$refs.preference.contains(e.target)){
    // //             this.show = false;
    // //         }
    //      })
    // }
}

</script>
<style lang="scss">
 .preference-modal{
    box-sizing: border-box;
    position: absolute;
    right:-.5rem;
    top: 1rem;
    background: $back-light1;
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