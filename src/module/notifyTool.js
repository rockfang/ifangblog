let notifyTool = {
  successTips(vm,title,tips) {
    if(vm.notifyInstance) {
      vm.notifyInstance.close();
    }
    vm.$notify({
      title: title,
      message: tips,
      type: 'success'
    });
  },

  warnTips(vm,title,tips) {
    if(vm.notifyInstance) {
      vm.notifyInstance.close();
    }
    vm.$notify({
      title: title,
      message: tips,
      type: 'warning'
    });
  },

  normalTips(vm,title,tips) {
    if(vm.notifyInstance) {
      vm.notifyInstance.close();
    }
    vm.$notify.info({
      title: title,
      message: tips,
    });
  },

  errorTips(vm,title,tips) {
    if(vm.notifyInstance) {
      vm.notifyInstance.close();
    }
    vm.$notify.error({
      title: title,
      message: tips,
    });
  },
};
export default notifyTool;
