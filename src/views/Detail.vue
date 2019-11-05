<template>
  <div class="main-container">
      <div class="left-container">
        <h4 class="articel-title">Vue首屏加载优化</h4>
        <div class="articel-content">
          巴拉巴拉内容们
        </div>
        <div class="articel-comment">
            <div class="comment-header">
              <div class="label">全部评论</div>
              <div class="order">
                <span>按时间倒叙</span>
                <span>按时间正序</span>
              </div>
            </div>
            <div class="comment-list">
                <div class="commentator">
                  <div>
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                  </div>
                  <div class="name">
                    <div>派大C</div>
                    <div>4楼 10.30 14:48</div>
                  </div>
                </div>
                <div class="comment-content">学习了</div>
                <div class="comment-opera">
                    <div class="l">
                      <span>赞</span>
                      <span>回复</span>
                    </div>
                    <div class="r">
                      <span>举报</span>
                    </div>
                </div>  
                <!-- <div class="comment-respon"> -->
                  <div class="comment-respon"><Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="写下你的评论..."></Input></div>
                  <div class="comment-submit">
                    <div class="left">
                      <span><Icon type="ios-happy-outline" /></span>
                    </div>
                    <div class="right">
                      <button>发布</button>
                      <button>取消</button>
                    </div>
                  </div>
                <!-- </div> -->
            </div>
        </div>
      </div>
      <div class="right-container">
        432
      </div>
  </div>
</template>
<style lang="less" scoped>
@import "../assets/base.less";
.articel-comment{
  .comment-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .comment-list{
    margin-top: 20px;
  }
  .commentator{
    display: flex;
    flex-direction: row;
    .name{
      margin-left: 20px;
    }
  }
  .comment-content{
    padding: 20px 0;
  }
  .comment-opera{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .comment-submit{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>>
