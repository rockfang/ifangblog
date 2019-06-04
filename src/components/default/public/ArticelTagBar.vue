<template>
    <div class="article-tag">
      <div class="tag-item">
        <a href="">
          <img src="../../../assets/images/tag.png" alt="">
          <span>Node</span>
        </a>
      </div>


      <div class="tag-item">
        <a href="">
          <img src="../../../assets/images/tag.png" alt="">
          <span>Android</span>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ArticelTagBar"
    }
</script>

<style lang="scss">
  .article-tag {
    background: white;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
    display: flex;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    border-top: 1px solid #eee;

    .tag-item {
      background: #EEEEEE;
      height: 20px;
      margin: 5px 10px;
      padding: 5px;
      border: 1px solid #eee;
      img {
        width: 20px;
        height: 18px;
      }
    }

    .tag-item:hover {
      color: #4FC08D;
      border-color: #4FC08D;
    }
    .tag-item a:hover {
      color: #4FC08D;
      border-color: #4FC08D;
    }
  }
</style>
