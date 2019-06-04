<template>
    <div>
      <v-headNavBar></v-headNavBar>
      文章詳情
      <div class="content">
        <div class="article" v-html="msg"></div>
      </div>
    </div>
</template>

<script>
  import HeadNavBar from '../default/public/HeadNavBar.vue'

  export default {
    name: "ArticleDetail",
    data:function() {
      return {
        msg:"aaa"
      }
    },
    components: {
      'v-headNavBar': HeadNavBar,
    }
  }
</script>

<style lang="scss">
  .content {
    text-align: center;
    .article {
      margin-top: 60px;
      display: inline-block;
      text-align: left;
      width:78%;
    }
  }
</style>
