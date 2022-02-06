<template>
  <div class='modal' v-if="isShowModal">
    <div class='inner'>
      <div class='m-header'>{{modalTitle}}</div>
      <div class='content-wrapper'>
        <slot></slot>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    isShowModal: {
      type: Boolean,
      default: false
    },
    modalTitle: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);

  .inner {
    width: 2.5rem;
    background-color: #fff;
    .m-header {
      height: .38rem;
      background-color: #337ab7;
      color: #fff;
      text-align: center;
      line-height: .38rem;
      font-size: .16rem;
    }

    .content-wrapper {
      padding: .15rem;
    }
  }
}
</style>