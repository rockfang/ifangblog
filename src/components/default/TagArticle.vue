<template>
  <div v-cloak>
    <v-headNavBar :path="this.$route.path"></v-headNavBar>

    <div class="content">
      <div class="main-atag" :style="mainHeight">
        <div class="tag-title">
          <img :src="'http://'+taginfo.icon" alt="" v-if="taginfo.icon">
          <img src="../../assets/images/tag.png" alt="" v-else>
          <h2>{{taginfo.name}} 标签</h2>
        </div>
        <div class="article-item" v-for="item in articles" >
          <div class="article-time-head">
            <img src="../../assets/images/calenter.png" alt="">
            <span>{{item.createTime}}</span>
          </div>
          <div class="article-title">{{item.title}}</div>
          <div class="article-message" v-html="item.description">
          </div>
          <div class="article-readmore" @click="goArticle(item._id)"><a href="">查看更多...</a></div>
        </div>
        <div v-if="!articles || articles.length == 0" class="empty-tips">本标签暂无文章</div>

        <template>
          <el-pagination
            small
            layout="prev, pager, next,jumper"
            :hide-on-single-page="hideSinglePage"
            @current-change="currentChange"
            :page-size="pageSize"
            :page-count="pageCount">
          </el-pagination>

        </template>
      </div>
    </div>

    <v-bottomBar v-if="ready"></v-bottomBar>

  </div>

</template>

<script>
  import HeadNavBar from './public/HeadNavBar.vue'
  import ArticelTagBar from './public/ArticelTagBar.vue'
  import BottomBar from './public/BottomBar.vue'
  import '../../assets/css/basic.scss';
  import Config from '../../module/config.js'


  export default {
    data() {
      return {
        TAG_INFO_URL: Config.BASE_WEB_URL + 'taginfo',
        TAG_ARTICLE_URL: Config.BASE_WEB_URL + 'tagarticle',
        taginfo: '',
        ready: false,

        pageSize:10,//每页显示多少条前端固定
        pageCount:0,
        hideSinglePage: true,
        articles:[],

        mainHeight: {
          'min-height': window.innerHeight - 265 + 'px'
        },
      }
    }, components: {
      'v-headNavBar': HeadNavBar,
      'v-articleTagBar': ArticelTagBar,
      'v-bottomBar': BottomBar,
    }, methods: {
      currentChange: function (page) {
        this.requestTagArticles(page);
      },requestTagArticles:function (page) {
        //请求服务器，获取pageCount
        this.$http.get(this.TAG_ARTICLE_URL + "?pageSize=" + this.pageSize + "&page=" + page
          + "&tagName=" + this.$route.params.name)
          .then(response => {
            if (response.body.success) {
              console.log('------------');
              console.log(response.body.articles);
              this.articles = response.body.articles;
              this.pageCount = response.body.pageCount;
              this.ready = true;//处理底部栏闪屏出现
            }
          },response => {

          });
      },
      initTagData: function () {
        this.$http.get(this.TAG_INFO_URL + "?name=" + this.$route.params.name).then(response => {
          if (response.body.success) {
            this.taginfo = response.body.taginfo;
          }
        }, response => {

        });
      },
      goArticle: function (id) {
        this.$router.push({path: '/article', query: {id: id}});
      }
    }, mounted() {
      this.initTagData();
      this.requestTagArticles(1);
    }
  }
</script>

<style lang="scss">
  [v-cloak] {
    display: none;

  }

  .content {
    margin: 65px 20px 20px 20px;
    text-align: center;
    /*background: #F7F7F7;*/

    .main-atag {
      display: inline-block;
      text-align: left;
      width: 78%;

      .tag-title {
        height: 40px;
        display: flex;
        margin-top: 30px;
        align-items: center;

        img {
          width: 30px;
          height: 30px;
          margin-right: 5px;
        }
      }

      .article-item {
        display: block;
        /*min-height: 330px;*/
        background: white;
        margin: 30px 0;
        padding: 30px 45px 30px 45px;
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
      .empty-tips {
        margin: 30px 0 0 20px;
      }

      .el-pagination {
        position: absolute;
        bottom: 200px;
      }
    }
  }

</style>
