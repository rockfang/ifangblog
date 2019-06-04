<template>
  <div>
    <v-headNavBar></v-headNavBar>

    <div class="content">
      <div class="main">
        <div class="article-item">
          <div class="article-time-head">
            <img src="../../assets/images/calenter.png" alt="">
            <span>2019-06-01</span>
          </div>
          <div class="article-title">文章标题：nodejs操作mongodb数据库</div>
          <div class="article-message">
            npm install mongodb --save-dev
            <br>
            var MongoClient = require('mongodb').MongoClient;
            <br>
            创建数据库地址
            <br>
            var url = 'mongodb://localhost:27017/test'; 这是2.版本的mongodb方式
            <br>
            var url = 'mongodb://localhost:27017/ 3.几版本连接数据库
          </div>
          <div class="article-readmore"><a href="">查看更多...</a></div>

          <v-articleTagBar></v-articleTagBar>

        </div>
        <div class="article-item">
          <div class="article-time-head">
            <img src="../../assets/images/calenter.png" alt="">
            <span>2019-06-01</span>
          </div>
          <div class="article-title">文章标题：nodejs操作mongodb数据库</div>
          <div class="article-message">
            npm install mongodb --save-dev
            <br>
            var MongoClient = require('mongodb').MongoClient;
            <br>
            创建数据库地址
            <br>
            var url = 'mongodb://localhost:27017/test'; 这是2.版本的mongodb方式
            <br>
            var url = 'mongodb://localhost:27017/ 3.几版本连接数据库
          </div>
          <div class="article-readmore"><a href="">查看更多...</a></div>

          <v-articleTagBar></v-articleTagBar>

        </div>
        <div class="article-item">
          <div class="article-time-head">
            <img src="../../assets/images/calenter.png" alt="">
            <span>2019-06-01</span>
          </div>
          <div class="article-title">文章标题：nodejs操作mongodb数据库</div>
          <div class="article-message">
            npm install mongodb --save-dev
            <br>
            var MongoClient = require('mongodb').MongoClient;
            <br>
            创建数据库地址
            <br>
            var url = 'mongodb://localhost:27017/test'; 这是2.版本的mongodb方式
            <br>
            var url = 'mongodb://localhost:27017/ 3.几版本连接数据库
          </div>
          <div class="article-readmore"><a href="">查看更多...</a></div>

          <v-articleTagBar></v-articleTagBar>

        </div>
        <div class="article-item">
          <div class="article-time-head">
            <img src="../../assets/images/calenter.png" alt="">
            <span>2019-06-01</span>
          </div>
          <div class="article-title">文章标题：nodejs操作mongodb数据库</div>
          <div class="article-message">
            npm install mongodb --save-dev
            <br>
            var MongoClient = require('mongodb').MongoClient;
            <br>
            创建数据库地址
            <br>
            var url = 'mongodb://localhost:27017/test'; 这是2.版本的mongodb方式
            <br>
            var url = 'mongodb://localhost:27017/ 3.几版本连接数据库
          </div>
          <div class="article-readmore"><a href="">查看更多...</a></div>

          <v-articleTagBar></v-articleTagBar>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import HeadNavBar from './public/HeadNavBar.vue'
import ArticelTagBar from './public/ArticelTagBar.vue'
import '../../assets/css/basic.scss';


export default {
      data() {
        return {
          name: 'home'
        }
      },components: {
        'v-headNavBar': HeadNavBar,
        'v-articleTagBar': ArticelTagBar


  }
    }
</script>

<style lang="scss">
.content {
  margin: 65px 20px 20px 20px;

  text-align: center;
  background: #F7F7F7;
  .main {
    display: inline-block;
    text-align: left;
    width:78%;
    .article-item {
      display: block;
      min-height: 330px;
      background: white;
      margin: 30px 0;
      padding: 30px 45px;
      border-radius: 10px;

      .article-time-head {
        img {
          width: 16.8px;
          height: 14px;
        }
      }

      .article-title {
        font-size: 26px;
        line-height: 42px;
        margin: 20px 0 25px;
      }
      .article-message {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 2;
        letter-spacing: 0.2px;
        word-break: break-word;
      }

      .article-readmore {
        display: inline-block;
        width: 100%;
        margin-top: 15px;
        margin-left: 0;
        color: #9E9E9E;
        font-weight: 400;
        font-size: 18px;
        font-style: italic;

        :hover {
          color: #4FC08D;
          border-color: #4FC08D;
        }
      }

    }
  }


}
</style>
