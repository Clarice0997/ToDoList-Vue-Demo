<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAllOrNot" />
      全选
    </label>
    <span
      ><span>已完成{{ $store.getters.finishedData }}件</span>/ 总计{{ $store.getters.totalData }}件</span
    >
    <button class="btn btn-warning" @click="delAllFininshedTodos">清除已完成任务</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoListFooter',

  data() {
    return {}
  },

  computed: {
    ...mapGetters(['totalData', 'finishedData', 'isCheck']),
    selectAllOrNot: {
      get() {
        return this.isCheck
      },
      set(value) {
        this.isSelectedAllTodo(value)
      }
    }
  },

  mounted() {},

  methods: {
    ...mapActions(['delFinishedTodo', 'isSelectedAllTodo']),
    delAllFininshedTodos() {
      this.delFinishedTodo()
    }
  }
}
</script>

<style lang="less" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
