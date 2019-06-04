<template>
  <div>
    <div class="leftBar">

      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
      <!--</el-radio-group>-->
      <el-menu default-active="2-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

        <el-menu-item index="1">
          <i class="el-icon-data-board"></i>
          <span slot="title">控制台</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <span slot="title">选项4</span>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>

    </div>

    <div style="float: right;margin-top: 100px" @click="isCollapse=!isCollapse">点击收起</div>
  </div>

</template>

<script>
    export default {
      data() {
        return {
          isCollapse: false
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .leftBar {
    position: fixed;
    top: 60px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    /*z-index: 99;*/
  }
  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
    /*width: 200px;*/
    /*!*min-height: 400px;*!*/
    /*height: 100%;*/
  /*}*/

  .el-menu-vertical-demo {
    top: 0;
    left: 0;
    height: 100%;
    /*background-color: #324057;*/
    z-index: 99;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 400px;*/
    min-height: 100%;
  }

</style>
