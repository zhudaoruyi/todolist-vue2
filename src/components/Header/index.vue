<template>
  <div class="header">
    <h1>事件待办</h1>
    <span class="icon" @click="$emit('open-input')">&#43;</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.44rem;
  background-color: #46b8da;
  
  h1 {
    text-align: center;
    line-height: 0.44rem;
    color: #fff;
    font-size: 0.18rem;
  }
  .icon {
    position: absolute;
    top: 0.08rem;
    right: 0.15rem;
    color: #fff;
  }
}
</style>