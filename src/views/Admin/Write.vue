<template> 
    <div class="main-container">
        <Form style="width:100%" :model="formItem" :label-width="80">
            <FormItem label="标题">
                <Input v-model="formItem.title" placeholder="请输入标题"></Input>
            </FormItem>
            <FormItem label="菜单">
                <Select v-model="formItem.menu">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem style="width:400px" label="创建时间">
                <Row>
                    <Col span="11">
                        <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                        <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="是否推荐">
                <RadioGroup v-model="formItem.recommend">
                    <Radio label="true">推荐</Radio>
                    <Radio label="false">不推荐</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="标签">
                <CheckboxGroup v-model="formItem.tag">
                    <Checkbox label="javascript"></Checkbox>
                    <Checkbox label="java"></Checkbox>
                    <Checkbox label="golang"></Checkbox>
                    <Checkbox label="node"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="设为隐私">
                <i-switch v-model="formItem.private" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            <FormItem label="简要描述">
                <Input v-model="formItem.discribel" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <!-- <FormItem label="正文"> -->
                <i-editor v-model="formItem.content"></i-editor>
               <!-- <m-i-editor></m-i-editor> -->
            <!-- </FormItem> -->

            <FormItem>
                <Button @click="submitFn" type="primary">确定</Button>
                <Button style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
// import MIEditor from "@src/components/MIEditor/index.vue"
import IEditor from 'iview-editor/src/lib/components/editor.vue';//引入编辑器
import 'iview-editor/dist/iview-editor.css'; //引入编辑器样式
@Component({
    components:{
        // MIEditor
          IEditor
    }
})
export default class Write extends Vue {
    formItem:any={
    title:"",
    menu:"",// 菜单
    date:"",// 创建日期
    time:"",// 创建时间
    recommend:"",//推荐
    tag:[],// 标签
    private:false,// 设置为隐私
    discribel:"",// 简要描述
    content:''// 正文内容
    }

    mounted () {
        // alert(1111);
    }

    submitFn(){
        console.log(this.formItem);
    }
}
</script>