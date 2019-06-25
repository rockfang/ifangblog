<template>
  <div>
    <template>
      <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
    </template>
  </div>
</template>



<script>
  export default {
    data(){
      return {
        img_file: {}
      }
    },
    methods: {
// 绑定@imgAdd event
      $imgAdd(pos, $file){
// 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('image', $file);
        console.log(formdata);
//         axios({
//           url: 'server url',
//           method: 'post',
//           data: formdata,
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }).then((url) => {
// // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
// // $vm.$img2Url 详情见本页末尾
//           $vm.$img2Url(pos, url);
//         })
      },$imgDel(pos){
        console.log(pos);
        delete this.img_file[pos];
      },
    }
  }
</script>

