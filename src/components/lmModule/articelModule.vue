<template>
    <div class="primary-back lm-module articel-module">
        <h2 class="title">热门文章</h2>
        <div class="content">
            <ul >
                <li>
                    <p class="title">第一阶段代码实现</p>
                    <p class="feed-back">
                        <span><Icon type="md-thumbs-up" /> 21</span>
                        <span><Icon type="ios-text" /> 22</span>
                    </p>
                </li>
                 <li>
                    <p class="title">第一阶段代码实现</p>
                    <p class="feed-back">
                        <span><Icon type="md-thumbs-up" /> 21</span>
                        <span><Icon type="ios-text" /> 22</span>
                    </p>
                </li>
                 <li>
                    <p class="title">第一阶段代码实现</p>
                    <p class="feed-back">
                        <span><Icon type="md-thumbs-up" /> 21</span>
                        <span><Icon type="ios-text" /> 22</span>
                    </p>
                </li>
                 <li>
                    <p class="title">第一阶段代码实现</p>
                    <p class="feed-back">
                        <span><Icon type="md-thumbs-up" /> 21</span>
                        <span><Icon type="ios-text" /> 22</span>
                    </p>
                </li>
            </ul>
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
export default class ArticelModule extends Vue  {

}
</script>