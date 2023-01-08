import { ADD_TODO, DELETE_TODO, DELETE_FINISHED_TODO, IS_SELECTED_ALL_TODO, CHANGE_TODO } from './mutations-type'

const actions = {
  // 新增代办项
  addTodo({ commit }, data) {
    // 调用Mutations
    commit(ADD_TODO, { data })
  },
  // 删除代办项
  deleteTodo({ commit }, index) {
    // 调用Mutations
    commit(DELETE_TODO, { index })
  },
  // 修改代办项
  changeTodo({ commit }, { index, isChecked }) {
    commit(CHANGE_TODO, { index, isChecked })
  },
  // 清除完成代办项
  delFinishedTodo({ commit }) {
    commit(DELETE_FINISHED_TODO)
  },
  // 是否全选
  isSelectedAllTodo({ commit }, isChecked) {
    commit(IS_SELECTED_ALL_TODO, { isChecked })
  }
}

export default actions
