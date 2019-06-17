<template>
  <div class="add-con">
    标签名称：
    <el-input
      type="text"
      v-model="typeName"
      maxlength="15"
      show-word-limit
    >
    </el-input>

    <div class="state-row">
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

    <div style="margin-top: 80px"></div>
      　序号：
      <el-input
        type="text"
        v-model="sort"
      >
      </el-input>

    <div class="icon-row">
      　　　图标：<span>(只能上传jpg/png文件，且不超过500kb)</span>
    </div>
    <div class="upload-row">
      <el-upload
        class="upload-demo"
        ref="upload"
        name="tag_icon"
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="fileChange"
        :file-list="fileList"
        :on-exceed="handleExceed"
        :limit="1"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
      </el-upload>
    </div>


    <div style="text-align: right;margin-top: 20px;">
      <el-button type="primary" class="commit-btn" @click="submitUpload">提交</el-button>
    </div>
  </div>
</template>

<script>
  import Config from '../../../module/config.js'
  import notifyTool from '../../../module/notifyTool.js'
  import msgTool from '../../../module/msgTool.js'

  export default {
    data() {
      return {
        fileList:[],

        pTypes:[],
        typeName: '',
        parentType: '',
        description: '',
        state: '0',
        lock: '0',
        sort:'',
        pid:'',
        ADD_URL: Config.BASE_URL + 'admin/articletype/doAdd',
        ARTICLE_PTYPE_URL: Config.BASE_URL + 'admin/articletype/getPtypes',
      }
    },methods: {
      init:function() {

      },
      doAdd:function () {
        if (!this.typeName) {
          notifyTool.normalTips(this,'','请填写分类名称');
          return;
        }

        if (!this.parentType) {
          notifyTool.normalTips(this,'','请选择上层分类');
          return;
        }

        this.$http.post(this.ADD_URL,{
          title: this.typeName,
          pid: this.pid,
          state: this.state,
          description: this.description,
          lock: this.lock
        }).then(response => {
          if (response.body.success) {
            notifyTool.successTips(this,'成功',response.body.msg);
            this.$router.push({path:'/manager/articletype'});
          } else {
            notifyTool.errorTips(this,'失败',response.body.msg);
          }
        },response => {
          notifyTool.errorTips(this,'添加失败','信息提交失败');
        });

      },

      fileChange(file){
        console.log('fileChange  ' + file);

        this.fileList.push(file.raw);//上传文件变化时将文件对象push进files数组
      },
      handleExceed(files, fileList) {
        msgTool.warnTips(this,`当前限制选择 1 个文件，如需更换请先移除选择的文件`)
      },
      submitUpload() {
        // this.$refs.upload.submit();
        //带参数上传 & 权限回调处理

        let formData = new FormData();
        console.log(this.fileList[0]);
        formData.append('tag_icon',this.fileList[0]);
        formData.append('name', this.name);
        // specify Content-Type, with formData as well
        this.$http.post('http://localhost:3005/admin/tag/addPic', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(function (res) {
          console.log(res.body);
        }, function (res) {
          console.log(res.body);
        });
      },
      handleRemove() {
        console.log('handleRemove  ');

        this.fileList.splice(0,1);
      },
      handlePreview(file) {
        console.log('handlePreview  ' + file);
      }
    },mounted() {
      this.init();
    }
  }
</script>

<style scoped lang="scss">
  .add-con {
    width: 400px;
    text-align: right;

    .state-row,.icon-row {
      float: left;
      margin-top: 20px;

      span {
        font-size: 10px
      }
    }

    .upload-row {
      margin-top: 60px;

      .upload-label {
        margin-left: 0px;
      }

      .upload-demo {

        width: 300px;
        display: inline-block;
        text-align: left;
      }

      .el-upload__tip {
        display: inline-block;
        font-size: 14px;
      }
    }

    .el-input {
      width: 300px;
    }

    .commit-btn {
      width: 120px;
    }

  }
</style>
