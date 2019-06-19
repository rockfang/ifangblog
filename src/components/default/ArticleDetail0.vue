<template>
  <div>
    <template>
      <el-pagination
        background
        layout="prev, pager, next"
        :hide-on-single-page="value"
        @current-change="currentChange"
        :page-size="pageSize"
        :page-count="pageCount">
      </el-pagination>
    </template>
  </div>
</template>

<script>

  import Config from '../../module/config.js'
  import notifyTool from '../../module/notifyTool.js'
  import msgTool from '../../module/msgTool.js'


  export default {
    data() {
      return {
        TAG_TYPE_URL: Config.BASE_URL + 'admin/tag',
        pageSize:1,//每页显示多少条前端固定
        pageCount:'',
        value: true,
      }
    },methods: {
      currentChange: function (page) {
        //请求指定页的数据
        console.log("----------");
        this.getPageTags(page);
      },getPageTags:function (page) {
        //请求服务器，获取pageCount,pageSize
        this.$http.get(this.TAG_TYPE_URL + "?pageSize=" + this.pageSize + "&page=" + page)
          .then(response => {
          if (response.body.success) {
            console.log("current Tags:");
            console.log(response.body.tags);
            this.pageCount = response.body.pageCount;
            console.log("pageCount:" + response.body.pageCount);
          }
        },response => {

        });
      },
    },mounted() {
      this.getPageTags(1);
    }
  }
</script>
