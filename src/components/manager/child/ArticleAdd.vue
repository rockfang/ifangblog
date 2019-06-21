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

      <!--<div class="top-input-con">-->
      <!--<div class="top-row">-->
      <!--<div class="row-label">关键字:</div>-->

      <!--<el-input-->
      <!--type="text"-->
      <!--placeholder="可输入关键字"-->
      <!--class="input_title"-->
      <!--v-model="keywords">-->
      <!--</el-input>-->
      <!--</div>-->
      <!--</div>-->

      <div class="last-row">
        <div class="top-input-con">
          <div class="top-row">
            <div class="row-label"><span style="color: red">*</span>类目:</div>
            <el-select v-model="parentType" placeholder="请选择"
                       @change="getValue"
                       size="medium">
              <template v-for="(item,index) in articletypes">
                <el-option
                  :label="item.title"
                  :value="item._id">
                </el-option>

                <template v-for="(child,cindex) in item.list">
                  <el-option
                    :label=" '　' + child.title"
                    :value="child._id">
                  </el-option>
                </template>
              </template>
            </el-select>


            <div style="margin-left: 30px;width: 100px"><span style="color: red">*</span>发布日期:</div>
            <el-date-picker
              v-model="publicDate"
              type="date"
              :picker-options="dateOptions"
              size="medium"
              placeholder="选择日期">
            </el-date-picker>
          </div>

        </div>

      </div>

      <!--标签选择-->
      <div class="tag-con">
        <div style="display: flex; align-items: center;">
          <div style="width: 60px"><span style="color: red">*</span>标签:</div>
          <el-tag
            v-for="tag in dynamicTags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            maxlength="15"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-if="dynamicTags.length < 5" class="button-new-tag" size="small" @click="showInput">+ 添加Tag
          </el-button>
          <el-button v-else class="button-new-tag" disabled size="small" @click="showInput">Tag最多5个</el-button>
        </div>

        <div class="operation">
          <el-button type="primary" size="mini" @click="publish('1')">发布</el-button>
          <el-button type="warning" size="mini" class="draft" @click="publish('0')">草稿</el-button>
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


  import Config from '../../../module/config.js'
  import notifyTool from '../../../module/notifyTool.js'
  import msgTool from '../../../module/msgTool.js'
  import commonTool from '../../../module/commonTool.js'

  export default {
    data() {
      return {
        ARTICLE_TYPE_URL: Config.BASE_URL + 'admin/articletype',



        title: "",
        description: "",

        keywords: "",
        articletypes: [],
        pid: "0",
        parentType: "",
        //标签选择
        dynamicTags: [],
        inputVisible: false,
        inputValue: "",
        disabled: 'disabled',

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
    }, components: {
      'v-headNavBar': HeadNavBar,
      'v-articleTagBar': ArticelTagBar
    }, methods: {
      publish: function (type) {
        console.log(this.renderText);
        if (!this.title || this.title.trim().length == 0) {
          msgTool.warnTips(this,"请填写标题");
          return;
        }
        if(!this.description || this.description.trim().length == 0) {
          msgTool.warnTips(this,"请填写文章摘要");
          return;
        }

        if(!this.parentType || this.parentType.trim().length == 0) {
          msgTool.warnTips(this,"请选择文章分类");
          return;
        }


      },
      saveMavon(value, render) {
        this.renderText = render;
      },
      // 绑定@imgAdd event
      $imgAdd(pos, $file) {
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
      }, getValue: function (value) {
        this.pid = value;
      },

      //处理标签
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';

        if (this.dynamicTags.length == 5) {

        }
      }

    },mounted() {
      this.$http.get(this.ARTICLE_TYPE_URL).then(response => {
        if (response.body.success) {
          this.articletypes = response.body.articletypes;
        }
      },response => {

      });
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
        }
      }
    }
  }

  .last-row {
    width: 100%;
    display: flex;

    .row-label {
      width: 60px;

      span {
        color: red;
      }
    }
  }


  .operation {
    position: absolute;
    right: 20%;
  }

  .markdown-body {
    /*min-height: 600px;*/
  }

  /**
    标签选择
   */
  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .tag-con {
    display: flex;
    margin: 20px 0;
  }
</style>
