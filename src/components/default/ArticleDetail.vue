<template>
    <div>
      <v-headNavBar></v-headNavBar>
      <div class="content">
        <el-container :style="cheight">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </div>
    </div>
</template>

<script>
  import HeadNavBar from '../default/public/HeadNavBar.vue'

  export default {
    name: "ArticleDetail",
    data:function() {
      return {
        msg:"aaa",
        cheight: {
          height: window.innerHeight - 60 + 'px'
        }
      }
    },
    computed: {

    },
    components: {
      'v-headNavBar': HeadNavBar,
    }
  }
</script>

<style lang="scss">
  .content {
    text-align: center;
    margin-top: 60px;
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

  }
</style>
