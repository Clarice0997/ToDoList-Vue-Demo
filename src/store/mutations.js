import { ADD_TODO, DELETE_TODO, DELETE_FINISHED_TODO, IS_SELECTED_ALL_TODO, CHANGE_TODO } from './mutations-type'

const mutations = {
  // 新增的时候传过来的数据
  [ADD_TODO](state, { data }) {
    state.todos.unshift(data)
  },
  [DELETE_TODO](state, { index }) {
    // 根据下标删除
    state.todos.splice(index, 1)
  },
  [DELETE_FINISHED_TODO](state) {
    // 过滤已完成代办项
    state.todos = state.todos.filter(todo => !todo.finished)
  },
  [CHANGE_TODO](state, { index, isChecked }) {
    state.todos[index].finished = isChecked
  },
  [IS_SELECTED_ALL_TODO](state, { isChecked }) {
    state.todos.forEach(todo => {
      todo.finished = isChecked
    })
  }
}

export default mutations
