<template>
  <div>
    <template>
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
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
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
        name:'node',
        fileList:[]
      };
    },
    methods: {
      fileChange(file){
        console.log('fileChange  ' + file);

        this.fileList.push(file.raw);//上传文件变化时将文件对象push进files数组
      },
      handleExceed(files, fileList) {
        msgTool.warnTips(this,`当前限制选择 1 个文件，您已经选取了${files.length + fileList.length} 个文件`)
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
      handleRemove(file, fileList) {

        console.log('handleRemove  ' + file, fileList);
        fileList.remove(file);
      },
      handlePreview(file) {
        console.log('handlePreview  ' + file);
      }
    }
  }
</script>
