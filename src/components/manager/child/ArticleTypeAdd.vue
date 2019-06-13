<template>
  <div class="add-con">
    分类名称：
    <el-input
      type="text"
      v-model="typeName"
      maxlength="10"
      show-word-limit
    >
    </el-input>

    <div style="margin: 20px 0;"></div>
    <div style="float: left">
      　上级分类：
      <el-select v-model="parentType" placeholder="请选择">
        <el-option
          key="0"
          label="顶层分类"
          value="0">
        </el-option>
        <el-option
          key="1"
          label="通过"
          value="1">
        </el-option>
      </el-select>
    </div>

    <div style="margin: 80px 0;"></div>
    <div style="float: left">
      　　　状态：
      <el-select v-model="state" placeholder="请选择">
        <el-option
          key="0"
          label="待审核"
          value="0">
        </el-option>
        <el-option
          key="1"
          label="通过"
          value="1">
        </el-option>
      </el-select>
    </div>
    <div style="margin: 150px 0;"></div>
    简要说明：
    <el-input
      type="text"
      v-model="description"
      show-word-limit
    >
    </el-input>
    <div style="text-align: right;margin-top: 20px">
      <el-button type="primary" class="commit-btn" @click="doAdd">提交</el-button>
    </div>
  </div>
</template>

<script>
  import Config from '../../../module/config.js'
  import notifyTool from '../../../module/notifyTool.js'
  export default {
    data() {
      return {
        pTypes:[],
        typeName: '',
        parentType: '',
        description: '',
        state: '0',
        ADD_URL: Config.BASE_URL + 'admin/articletype/doAdd',
        ARTICLE_PTYPE_URL: Config.BASE_URL + 'admin/articletype/parentType',
      }
    },methods: {
      init:function() {
        this.$http.get(this.ARTICLE_PTYPE_URL).then(response => {

        },response => {

        });
      },
      doAdd:function () {
        if (this.name.length < 3) {
          notifyTool.normalTips(this,'','用户名须不小于3位');
          return;
        }

        if (this.password.length < 3) {
          notifyTool.normalTips(this,'','密码须不小于3位');
          return;
        }

        if (this.password != this.repwd) {
          notifyTool.normalTips(this,'','两次输入密码不一致');
          return;
        }

        this.$http.post(this.MANAGER_ADD_URL,{
          username: this.name,
          password: this.password,
          repwd: this.repwd,
          state: this.state
        }).then(response => {
          if (response.body.success) {
            notifyTool.successTips(this,'成功',response.body.msg);
            this.clearForm();
            this.$router.push({path:'/manager/admin'});
          } else {
            notifyTool.errorTips(this,'失败',response.body.msg);
          }
        },response => {
          notifyTool.errorTips(this,'添加失败','信息提交失败');
        });

      },clearForm:function () {
        this.name = '';
        this.password = '';
        this.repwd = '';
      }
    },mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .add-con {
    width: 400px;
    text-align: right;
    .el-input {
      width: 300px;
    }
    .commit-btn {
      width: 120px;
    }
  }
</style>
