<template>
    <div class="lm-module english-module">
        <h2 class="title">daily english</h2>
        <div class="content">
           Don't comment anyone you don't reaily know.
        </div>
    </div>
</template>
<style lang="less" scoped>
.lm-module{
    padding-bottom: .5rem;
    .content{
        margin-top: .2rem;
    }
}
.articel-module{
    p{
        margin: 0;
    }
    ul{
        text-decoration: none;
        list-style: none;
        li{
            list-style: none;
            padding-bottom: .2rem;
        }
    }
    .feed-back{
        color:#909090;
        span{
            padding-right: .2rem;
            
        }
    }
}
</style>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  components: {
   
  }
})
export default class englishModule extends Vue  {

}
</script>