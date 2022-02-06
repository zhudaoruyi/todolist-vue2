<template>
  <div class="input-wrapper" v-if="isInputShow">
    <input type="text" v-model="inputValue" placeholder="请输入待办事件" />
    <button class="btn btn-primary" @click="submitValue">增加</button>
  </div>  
</template>

<script>
export default {
  props: {
    isInputShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    submitValue() {
      this.inputValue = this.inputValue.trim()
      if (this.inputValue.length === 0) {
        return;
      }
      this.$emit("add-item", this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style lang="less" scoped>
.input-wrapper {
  position: fixed;
  top: .44rem;
  left: 0;
  width: 100%;
  height: 0.44rem;

  display: flex;
  justify-content: center;
}
</style>