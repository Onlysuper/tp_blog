<template>
  <div class="main-container">
    <Row style="margin:0 auto">
        <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 12, offset: 0 }">
          <div class="left-container">
          432432
            <h4 class="articel-title">Vue首屏加载优化</h4>
            <div class="articel-content">
              巴拉巴拉内容们
            </div>
            <div class="articel-comment">
                <div class="comment-header">
                  <div class="label">全部评论</div>
                  <div class="order">
                    <span>按时间倒叙</span>
                    <span class="actived">按时间正序</span>
                  </div>
                </div>
                <div class="comment-list">
                        <div class="list-item">
                          <div class="commentator">
                            <div>
                              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            </div>
                            <div class="text-box">
                              <div class="nickname">派大C</div>
                              <div class="time">4楼 10.30 14:48</div>
                            </div>
                          </div>
                          <div class="comment-content">学习了</div>
                          <div class="comment-opera">
                              <div class="item">
                                <span><Icon type="ios-thumbs-up" />赞</span>
                                <span><Icon type="ios-text" />回复</span>
                              </div>
                          </div>  
                      </div>
                </div>
            </div>
          </div>
        </Col>
        <Col :xs="{ span: 24, offset: 0 }" :lg="{ span: 12, offset: 0}">
         <div class="right-container">
            <!-- 待开发 -->
            <div class="m-recommend">
              <div class="m-title">
                推荐阅读
              </div>
              <ul>
                <li v-for="(item,index) in recommendList" :key="index">
                  <p>{{item.title}}</p>
                  <p class="nums">阅读<span> {{item.readers}}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
  </div>
</template>
<style lang="less" scoped>
.articel-title{

}
.articel-comment{
  .comment-header{
    margin-top: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: .32rem;
    width:100%;
    position: relative;
    border-left: 4px solid #ec7259;
    align-items: center;
    .label{
      font-weight: bold;
      text-indent: .2rem;
    }
    .order{
      font-size: .26rem;
      span{
        display: inline-block;
        padding-right: .2rem;
        color:#969696;
        cursor: pointer;
        &.actived{
          color:#2d2d2d;
        }
      }
    }
  }
  .comment-list{
    margin-top: .2rem;
    .list-item{
      padding-bottom: .2rem;
    }
  }
  .commentator{
    display: flex;
    flex-direction: row;
    .text-box{
      margin-left: .2rem;
    }
    .name{
      margin-left: .2rem;
    }
    .nickname{
      font-weight: bold;
      font-size: .3rem;
    }
    .time{
      color: #969696;
      font-size: .2rem
    }
  }
  .comment-content{
    padding: 20px 0;
  }
  .comment-opera{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: .1rem;
    .item{
      color: #b0b0b0;
      font-size: .26rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      span{
        padding-right:.2rem;
      }
    }
  }
  .comment-submit{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }
  
}
</style>>
