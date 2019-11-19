<template>
    <div class="sign_page">
        <div class="main">
           <div class="tab">
               <div class="item">登录</div>
               <div class="item">注册</div>
           </div>
           <div class="content-box">
               <div class="row">
                <Icon type="md-person" /><input class="top" type="text" placeholder="手机号或邮箱">
               </div>
               <div class="row">
               <Icon type="ios-lock-outline" /><input type="text" placeholder="密码">
               </div>
               <div >
                   <button class="sign-but">登录</button>
               </div>
           </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.sign_page{
    height: 100%;
    // min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    height: 100vh;
    .main{
        width: 400px;
        margin: 120px auto 0;
        padding: 50px 50px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        vertical-align: middle;
        display: inline-block;
        .tab{
            display: flex;
            flex-direction: row;
            text-align: center;
            margin: 0 auto 50px;
            display: inline-block;
            .item{
                flex:1;
                display: inline-block;
                font-size: .3rem;
                // font-size: 1rem;
                padding: .3rem;
                font-weight: bold;
                color: #969696;
               
            }
        }
        .row{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;
            input{
                width: 100%;
                height: 50px;
                margin-bottom: 0;
                padding: 4px 12px 4px 35px;
                border: 1px solid #c8c8c8;
                border-radius: 0 0 4px 4px;
                background-color: hsla(0,0%,71%,.1);
                vertical-align: middle;
                position: relative;
                outline: none;
                &:focus:extend(input){

                }
                &.top{
                    border-bottom: none;
                    border-radius: 4px 4px 0 0;
                }
            }
            i {
                position: absolute;
                top: 14px;
                left: 10px;
                font-size: 18px;
                color: #969696;
            }
        }
        .sign-but{
            margin-top: 20px;
            width: 100%;
            padding: 9px 18px;
            font-size: 18px;
            border: none;
            border-radius: 25px;
            color: #fff;
            background: #3194d0;
            cursor: pointer;
            outline: none;
            display: block;
            clear: both;
        }
    }
}
@media (max-width: 768px){
    .sign_page{
        background: #fff;
        .main {
            position: absolute;
            left: 50%;
            margin: 0 0 0 -200px;
            box-shadow: none;
        }
    }
}

</style>