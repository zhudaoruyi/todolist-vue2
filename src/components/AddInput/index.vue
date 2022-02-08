<template>
  <div class="input-wrapper" v-if="isInputShow">
    <input type="text" ref="inputRef" v-model="inputValue" placeholder="请输入待办事件" />
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
  watch: {
    // 输入框获取焦点
    isInputShow(val) {
      if (val) {
        this.$nextTick(()=>{
          this.$refs.inputRef.focus()
        })
      }
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
  display: flex;
  flex-direction: row;
  position: fixed;
  top: .44rem;
  left: 0;
  width: 100%;
  height: .38rem;
  padding: .04rem .1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  input {
    flex: 1;
    display: block;
    height: .3rem;
    border: 1px solid #ddd;
    font-size: .14rem;
    text-indent: .1rem;
  }
  button {
    margin-left: .1rem;
  }
}
</style>