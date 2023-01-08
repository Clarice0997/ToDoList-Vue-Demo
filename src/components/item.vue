<template>
  <!-- {model} -->
  <li :style="{ backgroundColor: bgColor }" @mouseenter="dealShow(true)" @mouseleave="dealShow(false)">
    <label>
      <input type="checkbox" v-model="selectOrNot" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-warning" v-show="isShowDelButton" @click="delItem">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',

  data() {
    return {
      bgColor: '#fff',
      isShowDelButton: false
    }
  },

  computed: {
    selectOrNot: {
      get() {
        return this.todo.finished
      },
      set(value) {
        this.$store.dispatch('changeTodo', { index: this.index, isChecked: value })
      }
    }
  },

  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  mounted() {},

  methods: {
    dealShow(isShow) {
      this.bgColor = isShow ? '#ddd' : '#fff'
      this.isShowDelButton = isShow ? true : false
    },
    delItem() {
      this.$store.dispatch('deleteTodo', this.index)
    }
  }
}
</script>

<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
}

li label {
  cursor: pointer;
}

li button.btn {
  margin-top: 3px;
  padding: 3px 10px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
