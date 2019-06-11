<template>
    <div>
      我是控制台
    </div>
</template>

<script>
  import Config from '../../../module/config.js'
  import notifyTool from '../../../module/notifyTool.js'
    export default {
        name: "Board",

      data: function () {
        return {
          BOARD_URL: Config.BASE_URL + '/manager/board',
          loading: true
        }
      },methods: {
          requestBoardData: function () {
            console.log('requestBoardData');
            this.changeLoading(true);

            let vm = this;
            setTimeout(function () {
              vm.changeLoading(false);
            },5000);
          },changeLoading:function (loading) {
          console.log('changeLoading');

          this.$emit('sendValueToParent',loading);
        }
      },mounted() {
          this.requestBoardData();
      }
    }
</script>

<style scoped lang="scss">
</style>
