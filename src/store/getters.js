const getters = {
  // 任务总数量
  totalData(state) {
    return state.todos.length
  },
  // 已完成的任务数量
  finishedData(state) {
    const finishedCount = state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0)
    return finishedCount
  },
  // 确定全选按钮是否选中
  isCheck(state) {
    return getters.finishedData === state.todos.length && state.todos.length > 0
  }
}

export default getters
