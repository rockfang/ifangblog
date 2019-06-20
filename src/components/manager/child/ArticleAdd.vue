<template>
  <div>
    <div class="top">
      <div class="top-input-con">
        <div class="top-row">
          <div class="row-label"><span>*</span>标题:</div>

          <el-input
            type="textarea"
            autosize
            placeholder="请输入标题"
            class="input_title"
            v-model="title">
          </el-input>
        </div>
      </div>


      <div class="top-input-con">
        <div class="top-row">
          <div class="row-label"><span>*</span>摘要:</div>

          <el-input
            type="textarea"
            autosize
            placeholder="请输入摘要"
            class="input_title"
            v-model="description">
          </el-input>
        </div>
      </div>

      <div class="top-input-con">
        <div class="top-row">
          <div class="row-label">关键字:</div>

          <el-input
            type="text"
            placeholder="可输入关键字"
            class="input_title"
            v-model="keywords">
          </el-input>
        </div>
      </div>

      <div class="last-row">
        <div class="top-input-con">
          <div class="top-row">
            <div style="margin-right: 10px"><span style="color: red">*</span>发布日期:</div>

            <el-date-picker
              v-model="publicDate"
              type="date"
              :picker-options="dateOptions"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>

        <div class="operation">
          <el-button type="primary"  size="mini" @click="publish('1')">发布</el-button>
          <el-button type="warning"  size="mini" class="draft" @click="publish('0')">草稿</el-button>
        </div>
      </div>
    </div>
    <mavon-editor :toolbars="markdownOption"
                  v-model="rawText"
                  codeStyle='androidstudio'
                  :style="mheight"
                  @imgAdd="$imgAdd"
                  @save="saveMavon"
                  @change="saveMavon"

    />
  </div>
</template>

<script>
  import HeadNavBar from '../../default/public/HeadNavBar.vue'
  import ArticelTagBar from '../../default/public/ArticelTagBar.vue'

  export default {
    data() {
      return {
        title:"",
        description: "",
        keywords: "",
        publicDate: Date.now(),
        dateOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },

        //设置编辑框高度 60顶部栏+ 40header + 40footer 20预留底部距离 + 40本身Editor的padding预留
        mheight: {
          'min-height': window.innerHeight - 430 + 'px'
        },
        markdownOption: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        },

        rawText: "#### how to use mavonEditor in nuxt.js",
        renderText: ""
      };
    },components: {
      'v-headNavBar': HeadNavBar,
      'v-articleTagBar': ArticelTagBar
    },methods: {
      publish:function(type) {
        console.log(this.renderText);

      },
      saveMavon(value,render){
        this.renderText = render;
      },
      // 绑定@imgAdd event
      $imgAdd(pos, $file){
        console.log("触发图片上传");
        console.log(pos);
        console.log($file);
        // 第一步.将图片上传到服务器.
        // var formdata = new FormData();
        // formdata.append(‘file‘, $file);
        // console.log(formdata);
        // imgeApi(formdata).then(res=>{
        //   // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        //   /**
        //    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
        //    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
        //    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
        //    */
        //   console.log(res.data);
        //   let url="/server/"+res.data.data;
        //   this.$refs.md.$img2Url(pos, url);
        //   //相应的md格式的文件内容就是它绑定的变量
        //   //得到相应的html/文件
        //   console.log(this.$refs.md.d_render);
        //
        // });
      },
    }
    }
</script>

<style scoped lang="scss">
  .top {
    display: flex;
    flex-direction: column;
    .top-input-con {
      width: 75%;
      margin-top: 5px;
        .top-row {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .row-label {
            width: 60px;
            span {
              color: red;
            }
          }

          .input_title {
            flex: 1;
            margin-left: 10px;
          }
        }
    }
  }
  .last-row {
    width: 100%;
    display: flex;
    .operation {
      display: flex;
      align-items: center;
      margin-left: 50px;
    }
  }

  .markdown-body {
    /*min-height: 600px;*/
  }
</style>
