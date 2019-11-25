<template>
    <div class="lm-module admin-module">
        <Avatar  class="avatar" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <h2 class="title">悠悠</h2>
        <div class="content">
          代码笔记，代码笔记，代码笔记
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
.admin-module{
    text-align: center;
    .title{
        margin-top:.2rem;
    }
}
</style>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
@Component({
  components: {
   
  }
})
export default class adminModule extends Vue  {

}
</script>