<template>
    <div class="sign_page">
        <div class="dialog">
           <div class="tab">
               <div>登录</div>
               <div>注册</div>
           </div>
           <div class="content-box">
               <div class="row">
                <input type="text" placeholder="手机号或邮箱">
               </div>
               <div class="row">
                <input type="text" placeholder="密码">
               </div>
               <div class="but">
                   <button>登录</button>
               </div>
           </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.sign_page{
    .dialog{
        width: 2rem;
        background: @back-day;
    }
    .content-box{

    }
}
</style>