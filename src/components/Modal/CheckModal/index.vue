<template>
  <Modal
    :is-show-modal="isShowCheckModal"
    modal-title="查看事件"
  >
    <p class='topic'>时间：{{formatedDateTime}}</p>
    <p class='topic'>内容：{{data.content}}</p>
    <p class='topic'>状态：{{data.completed ? '已完成' : '未完成'}}</p>
    <button class='btn btn-primary confirm-btn' @click="$emit('close-modal')">确定</button>
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
    isShowCheckModal: {
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
      formatedDateTime: null
    }
  },
  watch: {
    data(val) {
      this.formatedDateTime = formatDateTime(val.id)
    }
  },
}
</script>

<style lang="less" scoped>
.topic{
  font-size: .14rem;
  margin-bottom: .1rem;
}

.confirm-btn{
  width: 100%;
  margin-top: .4rem;
}
</style>