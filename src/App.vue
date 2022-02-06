<template>
  <div id="app">
    <MyHeader @open-input="isInputShow=!isInputShow" />
    <AddInput :is-input-show="isInputShow" @add-item="addItem($event)" />
    <ul class="todo-list" v-if="todoList.length">
      <TodoItem v-for="item, index in todoList" :key="index"
        :data="item"
        @complete-item="completeItem($event)"
        @open-check-modal="openCheckModal($event)"
        @open-edit-modal="openEditModal($event)"
        @remove-item="removeItem($event)"
      />
    </ul>
    <NoDataTip v-else />

    <CheckModal 
      :is-show-check-modal="isShowCheckModal" 
      :data="currentData" 
      @close-modal="isShowCheckModal=false" />
    <EditModal 
      :is-show-edit-modal="isShowEditModal" 
      :data="currentData" 
      @submit-edit="submitEdit(arguments)" />    
  </div>
</template>

<script>
import MyHeader from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/TodoItem'
import CheckModal from './components/Modal/CheckModal'
import EditModal from './components/Modal/EditModal'
import NoDataTip from './components/NoDataTip'

export default {
  components: {
    MyHeader,
    AddInput,
    TodoItem,
    CheckModal,
    EditModal,
    NoDataTip
  },
  data() {
    return {
      isInputShow: false,
      todoList: [],
      isShowCheckModal: false,
      isShowEditModal: false,
      currentData: {}
    }
  },
  watch: {
    todoList(val) {
      localStorage.setItem('todoData', JSON.stringify(val)) // 监测todoList，有变化，就缓存
    }
  },
  created() {
    this.todoList = JSON.parse(localStorage.getItem('todoData') || '[]') // 此时先从缓存中拿到数据
  },
  methods: {
    addItem(value) {
      const dataItem = {
        id: new Date().getTime(),
        content: value,
        completed: false
      };
      this.todoList.push(dataItem)
      this.isInputShow = false
    },
    completeItem(id) {
      this.todoList = this.todoList.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    },
    openCheckModal(id) {
      this.currentData = this.todoList.filter(item => item.id === id)[0]
      this.isShowCheckModal = true
    },
    openEditModal(id) {
      this.currentData = this.todoList.filter(item => item.id === id)[0]
      this.isShowEditModal = true
    },
    removeItem(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    submitEdit(args) {
      this.todoList = this.todoList.map(item => {
        if (item.id === args[1]) {
          item = args[0]
        }
        return item
      })
      this.isShowEditModal = false
    }
  }
}
</script>

<style lang="less">
#app {
  .todo-list {
    margin-top: .44rem;
  }  
}
</style>
