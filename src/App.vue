<template>
  <div id="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import List from '@/components/list'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style lang="less">
@import '@/assets/css/index.css';

/*app*/
#todo-container {
  width: 600px;
  margin: 0 auto;
}

#todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
