<template>
    <div v-cloak>
      <v-headNavBar></v-headNavBar>
      <div class="content ">
        <div class="article" v-html="article">

        </div>
      </div>
      <v-bottomBar v-if="ready"></v-bottomBar>
    </div>
</template>

<script>

  import HeadNavBar from '../default/public/HeadNavBar.vue'
  import BottomBar from './public/BottomBar.vue'
  import Config from '../../module/config.js'

  export default {
    name: "ArticleDetail",
    data:function() {
      return {
        article: '',
        ARTICLE_INDEX_URL: Config.BASE_URL + 'index/articleDetail',
        ready: false
      }
    },
    computed: {

    },
    components: {
      'v-headNavBar': HeadNavBar,
      'v-bottomBar': BottomBar,
    },methods:  {
      init: function () {

        // this.$http.get('./article.json').then(response => {
        //   if (response.body.success) {
        //     this.article = response.body.article.renderText;
        //     this.ready = true;
        //
        //   }
        // },response => {
        //
        // });

        this.$http.get(this.ARTICLE_INDEX_URL +"?id=" + this.$route.query.id).then(response => {
          if (response.body.success) {
            this.article = response.body.article.renderText;
            this.ready = true;

          }
        },response => {

        });
      }
    },mounted() {
      this.init();
    }
  }
</script>

<style lang="scss">
  [v-cloak] {
    display:none;

  }
  .content {
    margin-top: 60px;
    display: flex;
    width: 100%;
    justify-content: center;

    .article {
      width: 65%;
      min-height: 560px;
      text-align: left;
      background: white;
      margin: 30px 0;
      padding: 30px 45px;
      border-radius: 10px;
    }

    pre {
      border-radius: 5px !important;
    }
  }
</style>
