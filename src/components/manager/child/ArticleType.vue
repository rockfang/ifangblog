<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
      row-key="_id"
      :tree-props="{children: 'list'}"
    >

      <el-table-column
        label="文章分类"
        width="180"
        align="left">
        <template slot-scope="scope">
          <span style="text-align: left">{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        width="80"
        align="center">
        <template slot-scope="scope">
          <i @click="changeState(scope.row)" v-if="scope.row.state == 1" class="el-icon-success" style="color: #5CB6FF"></i>
          <i @click="changeState(scope.row)" v-else class="el-icon-error" style="color: red"></i>
        </template>
      </el-table-column>

      <el-table-column
        label="公开"
        width="80"
        align="center">
        <template slot-scope="scope">
          <i @click="changeState(scope.row)" v-if="!scope.row.lock" class="el-icon-success" style="color: #5CB6FF"></i>
          <i @click="changeState(scope.row)" v-else class="el-icon-lock" style="color: #C76E00"></i>
        </template>
      </el-table-column>

      <el-table-column label="操作"
                       align="left">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Config from '../../../module/config.js'
  import notifyTool from '../../../module/notifyTool.js'
  export default {
    data() {
      return {
        ARTICLE_TYPE_URL: Config.BASE_URL + 'admin/articletype',
        CHANGE_STATE_URL: Config.BASE_URL + 'admin/changeState',
        DELETE_URL: Config.BASE_URL + 'admin/articletype/delete',
        tableData: [] //
       }
    },
    methods: {
      initData() {
        this.$http.get(this.ARTICLE_TYPE_URL).then(response => {
          if (response.body.success) {
            this.tableData = response.body.articletypes;
            console.log(this.tableData);
          }
        },response => {

        });
      },
      handleEdit(index, row) {
        this.$router.push({path:'/manager/admin/edit',query: { id: row.id, username: row.username}});
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$http.get(this.DELETE_URL + '?id='+ row.id).then(response => {
          if (response.body.success) {
            notifyTool.successTips(this,'成功',response.body.msg);
            this.initData();
          } else {
            notifyTool.errorTips(this,'失败',response.body.msg);
          }
        },response => {
          notifyTool.errorTips(this,'失败','删除失败');
        });
      }, tableRowClassName({row, rowIndex}) {
        if(this.tableData[rowIndex]) {
          if(this.tableData[rowIndex].state == '0') {
            return 'warning-row';
          } else {
            //return 'success-row';
          }
        }
        return '';
      },changeState: function (row) {
        this.$http.post(this.CHANGE_STATE_URL,{
          id: row.id,
          collectionName:'admin',
          attr: 'state'
        }).then(response => {
          if (response.body.success) {
            notifyTool.successTips(this,'成功',response.body.msg);
            if (row.state == '1') {
              row.state = '0';
            } else {
              row.state = '1';
            }
          }
        },response => {
        });
      }
    },mounted() {
      this.initData();
    }
  }
</script>

<style >
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
