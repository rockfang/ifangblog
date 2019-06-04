<template>

  <div>
    <AdminHeadBar></AdminHeadBar>
    <AdminLeftBar></AdminLeftBar>
  </div>
</template>

<script>
  import AdminHeadBar from "./public/AdminHeadBar.vue"
  import AdminLeftBar from "./public/AdminLeftBar.vue"
    export default {
        components: {
          AdminHeadBar,AdminLeftBar
      }
    }
</script>

<style scoped>

</style>
