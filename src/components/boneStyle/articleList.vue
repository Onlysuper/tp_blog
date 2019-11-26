<template>
<div class="timeline-item">
   <div class="animated-background">
     <div class="background-masker first-left"></div>
     <div class="background-masker split-line1"></div>
     <div class="background-masker second-left"></div>
     <div class="background-masker split-line2"></div>
     <div class="background-masker third-left"></div>
     <div class="background-masker split-line3"></div>
     <div class="background-masker four-left"></div>
     <div class="background-masker split-line4"></div>
     <div class="background-masker vertical-line"></div>
   </div>
</div>
</template>
<style lang="css" scoped>
.timeline-item {
   margin-top: 20px;
}


@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100px;
    position: relative;
}


.background-masker {
    background: #fff;
    position: absolute;
}

.first-left{
    /* width: 50%; */
    position: absolute;
    right: 120px;
    left: 40%;
    height: 20px;
}
.split-line1{
    position: absolute;
    top: 20px;
    height: 20px;
    right: 120px;
    left: 0;
}

.second-left{
    position: absolute;
    left: 0px;
    right: 100%;
    height: 10px;
    top: 40px;
}
.split-line2{
     position: absolute;
    top: 50px;
    height: 10px;
    right: 120px;
    left: 0;
}
.third-left{
    position: absolute;
    left: 0px;
    right: 100%;
    height: 10px;
    top: 60px;
}
.split-line3{
    position: absolute;
    top: 70px;
    height: 10px;
    right: 120px;
    left: 0;
}
.four-left{
    position: absolute;
    right: 120px;
    left: 50%;
    height: 10px;
    top: 80px;
}
.split-line4{
    position: absolute;
    top: 90px;
    height: 10px;
    right: 120px;
    left: 0;
}
.vertical-line{
    width: 10px;
    /* height: 100%; */
    top: 0;
    bottom: 0;
    right: 110px;
}
/* Every thing below this is just positioning */
</style>