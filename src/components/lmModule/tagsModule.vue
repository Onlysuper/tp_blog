<template>
    <div class="lm-module hot-recommend">
        <h2 class="title">热门标签</h2>
        <div class="content">
            <Tag color="default">default</Tag> 
            <Tag color="primary">primary</Tag>
            <Tag color="success">success</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="yellow">yellow</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
            <Tag color="#FFA2D3">Custom Color</Tag>
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

</style>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
export default class TagsModule extends Vue  {
}
</script>