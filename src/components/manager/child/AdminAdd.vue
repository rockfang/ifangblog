<template>
    <div class="add-con">
      　用户名：
      <el-input
        type="text"
        v-model="name"
        maxlength="10"
        minlength="3"
        show-word-limit
      >
      </el-input>
      <div style="margin: 20px 0;"></div>

      　　密码：
      <el-input  v-model="password" show-password></el-input>
      <div style="margin: 20px 0;"></div>
      确认密码：
      <el-input v-model="repwd" show-password></el-input>
      <div style="margin: 20px 0;"></div>

      <div style="text-align: right">
       <el-button type="primary" class="commit-btn" disabled>提交</el-button>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        password: '',
        repwd: '',
      }
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
