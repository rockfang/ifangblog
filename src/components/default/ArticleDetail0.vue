<template>
  <div>
    <template>
      <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
    </template>
  </div>
</template>



<script>

  import Config from '../../module/config.js'
  import notifyTool from '../../module/notifyTool.js'
  import msgTool from '../../module/msgTool.js'
  export default {
    name: "write",
    data() {
      return {
        mdText: "",
        images: {},
        POST_IMG_URL: Config.BASE_URL + "admin/article/postImg",
        DELETE_IMG_URL: Config.BASE_URL + "admin/article/deleteImg"
      };
    },
    methods: {
      $imgAdd(pos, file) {
        const $vm = this.$refs.md;

        let formData = new FormData();
        formData.append('image', file);
        formData.append('title', "我是标题啊大哥");
        this.$http.post(this.POST_IMG_URL, formData, {headers: { "Content-Type": "multipart/form-data" }}).then(function (response) {
          $vm.$img2Url(pos, response.data.remoteUrl);
        }, function (res) {
          console.log(error);

        })
      },
      $imgDel(rs) {
        let spliteArr = rs[0].split('/');
        let remoteName = spliteArr[spliteArr.length-1];
        console.log(remoteName);
        this.$http.get(this.DELETE_IMG_URL + "?remoteName=" + remoteName).then(response => {
            if(response.body.success) {
              console.log(response.body.msg);
            }
        },response => {

        });
      }
    }
  };
</script>

