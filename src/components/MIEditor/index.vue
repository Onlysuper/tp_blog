<template>
<div>
    <i-editor v-model="content"></i-editor>
</div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import IEditor from 'iview-editor/src/lib/components/editor.vue';//引入编辑器
import 'iview-editor/dist/iview-editor.css'; //引入编辑器样式
@Component({
    components:{
        IEditor
    }
})
export default class MIEditor extends Vue {
    content : string = ""
}
</script>