<template>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        >

        <el-table-column
          label="姓名"
          width="180"
          align="center">
          <template slot-scope="scope">
            <span style="text-align: center">{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="上次登录时间"
          width="180"
          align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="text-align: center">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="180"
          align="center">
          <template slot-scope="scope">
            <i v-if="true" class="el-icon-success" style="color: #5CB6FF"></i>
            <i v-else class="el-icon-error" style="color: red"></i>
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
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped lang="scss">

  /**
    表头和单元格居中
   */
  /*.el-table th>.cell {*/
    /*text-align: center !important;*/
  /*}*/
  .el-table .cell {
    text-align: center;
  }
</style>
