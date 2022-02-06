<template>
  <Modal
    :is-show-modal="isShowEditModal"
    modal-title="编辑事件"
  >
    <p class='topic'>时间：{{formatedDateTime}}</p>      
    <p class='topic'>
      <textarea class='text-area' v-model="inputValue" :defaultValue="data.content" />
    </p>

    <p class='topic'>状态：
      <input v-model="checkValue" type="checkbox" :defaultChecked="data.completed ? true : false" />
    </p>
    <button class='btn btn-primary comfirm-btn' @click="formatNewData">提交</button>
  </Modal>
</template>

<script>
import Modal from "../"
import { formatDateTime } from "../../../libs/utils";

export default {
  components: {
    Modal
  },
  props: {
    isShowEditModal: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      inputValue: '',
      checkValue: '',
      formatedDateTime: null
    }
  },
  watch: {
    data(val) {
      this.inputValue = val.content
      this.checkValue = val.completed
      this.formatedDateTime = formatDateTime(val.id)
    }
  },
  methods: {
    formatNewData() {
      if (this.inputValue.trim() === 0) {
        return;
      }
      const newData = {
        id: new Date().getTime(),
        content: this.inputValue.trim(),
        completed: this.checkValue
      }      
      this.$emit('submit-edit', newData, this.data.id)
    }
  }
}
</script>

<style lang="less" scoped>
.topic{
  font-size: .14rem;
  margin-bottom: .1rem;
}

.comfirm-btn{
  width: 100%;
  margin-top: .4rem;
}

.text-area{
  width: 100%;
  min-height: 1rem;
  border: 1px solid #ddd;
  padding: .05rem;
}

</style>