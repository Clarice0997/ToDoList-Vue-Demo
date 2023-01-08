<template>
  <ul class="todo-main">
    <Item v-for="(item, index) in todos" :key="index" :todo="item" :index="index"></Item>
  </ul>
</template>

<script>
import Item from '@/components/item'
import { mapState } from 'vuex'

export default {
  name: 'TodoListList',

  data() {
    return {}
  },

  components: {
    Item
  },

  computed: {
    ...mapState(['todos'])
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
