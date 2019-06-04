<template>
  <div>
    <div class="leftBar">

      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
      <!--</el-radio-group>-->
      <el-menu background-color="transparent" default-active="2-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

        <el-menu-item index="1">
          <i class="el-icon-notebook-2"></i>
          <span slot="title">控制台</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span slot="title">管理员列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">管理员列表</el-menu-item>
            <el-menu-item index="2-2">增加管理员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">文章分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">分类列表</el-menu-item>
            <el-menu-item index="3-2">增加分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">文章管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">文章列表</el-menu-item>
            <el-menu-item index="4-2">增加文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-link"></i>
            <span slot="title">友情链接管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">友情链接列表</el-menu-item>
            <el-menu-item index="5-2">增加友情链接</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-discover"></i>
            <span slot="title">导航管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">导航列表</el-menu-item>
            <el-menu-item index="6-2">增加导航</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="7">
          <i class="el-icon-s-tools"></i>
          <span slot="title">系统设置</span>
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
    /*background-color: #324057;*/
    /*color: white;*/
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
    /*background-color: transparent !important;*/
    z-index: 99;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 400px;*/
    min-height: 100%;
  }

  .el-submenu__title * {
    color: white;
  }

  /*子菜单颜色*/
  .el-menu-item {
    background-color: transparent  !important;
    color: white;
  }

  /*字体颜色：*/
  .el-aside {
    color: white;
  }
  /*鼠标悬浮时，子菜单的样式：*/
  .el-menu-item:hover{
    outline: 0 !important;
    color: #409EFF !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background: #409EFF !important;
  }
  /*4.鼠标悬浮时，主菜单的样式：*/
  .el-submenu__title:focus, .el-submenu__title:hover {
    outline: 0 !important;
    color: #409EFF !important;
    background: none !important;
  }
</style>
