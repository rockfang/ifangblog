<template>

  <div>
    <ManagerHeadBar></ManagerHeadBar>
    <ManagerContent></ManagerContent>
  </div>
</template>

<script>
  import ManagerHeadBar from "./ManagerHeadBar.vue"
  import ManagerContent from "./ManagerContent.vue"
    export default {
        components: {
          ManagerHeadBar,ManagerContent
      }
    }
</script>

<style scoped>

</style>
