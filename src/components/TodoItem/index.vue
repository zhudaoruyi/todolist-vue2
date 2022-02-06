<template>
  <div>
    <li class="todo-item">
      <div class="check-box">
        <input type="checkbox" :checked="data.completed" @change="$emit('complete-item', data.id)" />
      </div>
      <span class="content" :style="{'textDecoration': data.completed ? 'line-through' : 'none'}">{{data.content}}</span>
      <div class="btn-group">
        <button class="btn btn-primary" @click="$emit('open-check-modal', data.id)">查看</button>
        <button class="btn btn-warning" @click="$emit('open-edit-modal', data.id)">编辑</button>
        <button class="btn btn-danger" @click="$emit('remove-item', data.id)">删除</button>
      </div>
    </li>    
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  padding: 10px 4px;
  .btn-group {
    display: flex;
  }
}
</style>