<template>
  <div class="todo-header">
    <label>
      <input type="text" placeholder="请输入今天的任务清单，按回车键确认" v-model.trim="title" @keydown.enter="addItem" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'TodoListHeader',

  data() {
    return {
      title: ''
    }
  },

  mounted() {},

  methods: {
    // 添加代办项
    addItem() {
      if (this.title !== '') {
        // 构建对象
        let todo = {
          title: this.title,
          finished: false
        }
        this.$store.dispatch('addTodo', todo)
        this.title = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(188, 183, 183, 0.8);
  box-shadow: inset 0 1px 1px rgba(168, 167, 167, 0.075), 0 0 8px rgba(53, 52, 52, 0.6);
}
</style>
